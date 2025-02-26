import { useLoaderData, useSearchParams } from 'react-router';

// import CountryCard from '~/components/country-card';
import CountriesCard from '~/components/countries-card';
import CountrySearch from '~/components/country-search';
import { BasicPagination } from '~/components/pagination';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import type { Route } from './+types/countries';
// import IMAGE from '/hero.webp';

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `Countries Page (${data.data.length})` },
    { name: 'description', content: 'Welcome to the Countries Page!' },
  ];
}

// this is for server side
export async function loader({
  request,
}: Route.LoaderArgs): Promise<CountryResponse> {
  const signal = new AbortController().signal;

  const queryParams = new URLSearchParams(request.url.split('?')[1]);
  const query = queryParams.get('q') || '';
  const filter = queryParams.get('filter') || '';

  // console.log('query', query);

  const BASE_URL = process.env.COUNTRIES_BASE_URL;

  const url = filter
    ? `${BASE_URL}/region/${filter}`
    : query
    ? `${BASE_URL}/name/${query}`
    : `${BASE_URL}/all`;

  const response = await fetch(url, {
    cache: 'force-cache',
    signal,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = (await response.json()) as Array<Country>;

  // console.log('data.length', data.length);

  return {
    data: data,
    q: query,
    filter,
  };
}

// this is for client side
export async function clientLoader({
  serverLoader,
}: Route.ClientLoaderArgs): Promise<CountryResponse> {
  const response = await serverLoader();

  if (!response) {
    throw new Error('Failed to load countries data');
  }

  return response;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return (
    <div className={'h-dvh flex items-center justify-center bg-red-500'}>
      Loading...
    </div>
  );
}

export default function CountriesPage({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData;

  const [searchParams] = useSearchParams();

  const perPage = 8;
  const page = Number(searchParams.get('page')) || 1;

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const countries = data.slice(start, end);

  return (
    <main className={'py-8 md:py-12 lg:py-16'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        <div className={'flex items-center justify-between max-w-6xl mx-auto'}>
          <CountrySearch />
          <FilterByRegion />
        </div>

        <div
          className={
            'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'
          }>
          {countries.map((country) => (
            <CountriesCard key={country.cca2} country={country} />
          ))}
        </div>

        {/* <Suspense fallback={<div>Loading...</div>}>
          <CountryPagination page={page} perPage={perPage} />
        </Suspense> */}
        <div className={'w-full flex items-center justify-center'}>
          <BasicPagination />
        </div>
      </section>
    </main>
  );
}

function FilterByRegion() {
  const { data, filter } = useLoaderData<CountryResponse>();

  const [, setSearchParams] = useSearchParams();

  const regions = data.map((country) => country.region);
  const uniqueRegions = [...new Set(regions)];

  const serializeFormQuery = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const params = new URLSearchParams();

    for (const [key, value] of formData) {
      params.set(key, value as string);
    }

    return params;
  };

  const handleSearchChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent form submission
    const value = e.currentTarget.children[1].closest('select')?.value;
    // console.log('value', value);

    const params = serializeFormQuery(e.currentTarget);

    setSearchParams({
      ...params,
      filter: value,
    });
  };

  return (
    <div>
      <form onChange={handleSearchChange}>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a region' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Region</SelectLabel>
              {uniqueRegions.map((region) => (
                <SelectItem
                  key={region}
                  value={region.toLocaleLowerCase()}
                  className={'capitalize'}>
                  {region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </form>
    </div>
  );
}
