import { Link } from 'react-router';
import { useIntersectionObserver } from 'usehooks-ts';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Skeleton } from './ui/skeleton';

export default function CountriesCard({ country }: { country: Country }) {
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    root: null,
    rootMargin: '-500px',
    threshold: 0.1,
    initialIsIntersecting: true,
  });

  return (
    <div ref={ref} className={'w-full'}>
      <Card className={'cursor-pointer'}>
        <CardHeader>
          <CardTitle className={'line-clamp-1'}>
            {country.name.official}
          </CardTitle>
        </CardHeader>

        {isIntersecting ? (
          <CardContent>
            <Skeleton className='aspect-video w-full h-full' />
          </CardContent>
        ) : (
          <CardContent>
            <div className={'aspect-video drop-shadow-lg'}>
              <img
                src={country.flags.svg}
                alt='country card'
                width={500}
                height={500}
                loading={isIntersecting ? 'eager' : 'lazy'}
                decoding={isIntersecting ? 'auto' : 'async'}
                className='object-cover w-full h-full saturate-50 hover:saturate-100 transition-all duration-300 ease-in-out rounded-lg hover:scale-105'
                fetchPriority={isIntersecting ? 'high' : 'auto'}
              />
            </div>
          </CardContent>
        )}

        <CardContent>
          <CardDescription>
            <span className={'block'}>{country.name.common}</span>

            <span className={'block'}>{country.capital}</span>

            <span className={'inline-flex flex-col gap-1'}>
              <span className={'text-xs'}> Region</span> {country.region}
              <span className={'text-xs'}>Sub-Region</span>
              {country.subregion}
            </span>

            <span className={'block'}>
              {new Intl.NumberFormat('en-IN', {
                numberingSystem: 'latn',
                style: 'decimal',
              }).format(country.population)}{' '}
              people
            </span>
          </CardDescription>
        </CardContent>

        <CardFooter>
          <Button asChild className={'w-full'} variant={'outline'}>
            <Link
              to={`/countries/${country.name.common
                .replace(' ', '-')
                .toLocaleLowerCase()}`}
              viewTransition
              className={'block'}
              prefetch='intent'>
              Know More
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
