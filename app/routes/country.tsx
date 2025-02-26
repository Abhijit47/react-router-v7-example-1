import type { JSX } from 'react';
import { useMatches } from 'react-router';
import CountryCard from '~/components/country-card';
import type { Route } from './+types/country';

export function meta({ data }: Route.MetaArgs) {
  return [
    {
      title: `Country Page | ${data
        .map((country) => country.name.common)
        .join(', ')}`,
    },
    { name: 'description', content: 'Welcome to the Country Page!' },
  ];
}

// this is for server side
export async function loader({
  params,
}: Route.LoaderArgs): Promise<Array<Country>> {
  const signal = new AbortController().signal;

  const name = params.countryName.replace('-', ' ');

  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
    {
      cache: 'force-cache',
      signal,
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = (await response.json()) as Array<Country>;

  console.log('data.length', data.length);

  return JSON.parse(JSON.stringify(data));
}

// this is for client side
export async function clientLoader({
  serverLoader,
  params,
}: Route.ClientLoaderArgs): Promise<Array<Country>> {
  const data = await serverLoader();

  return JSON.parse(JSON.stringify(data));
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function CountryPage({ loaderData }: Route.ComponentProps) {
  const data = loaderData;
  const matches = useMatches();

  console.log('matches', matches);

  return (
    <main className={'py-8 md:py-12 lg:py-16'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0'}>
        <Breadcrumbs />
      </section>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0'}>
        <CountryCard country={data} />
      </section>
    </main>
  );
}

function Breadcrumbs() {
  const matches = useMatches();

  const data = matches.map((match) => match.data) as Array<Country>;

  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => {
      if (match.handle === undefined) {
        return false;
      }
      return Boolean((match.handle as { crumb?: unknown })?.crumb);
    })
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) =>
      (match.handle as { crumb: (data: Array<Country>) => JSX.Element }).crumb(
        data
      )
    );

  return (
    <ol className='flex space-x-2'>
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
    </ol>
  );
}
