import { Link } from 'react-router';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function CountryCard({ country }: { country: Country[] }) {
  const data = country;

  return (
    <Card className={'relative'}>
      <CardHeader>
        <CardTitle className={'space-y-2'}>
          <h1>
            {data[0].name.common} ({data[0].name.official})
          </h1>
          <h2>Welcome to the Country Page!</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
          <div className={'aspect-square'}>
            <img
              src={data[0].flags.svg}
              alt='country card'
              width={500}
              height={500}
              loading='lazy'
              decoding='auto'
              className='object-contain w-full h-full'
              fetchPriority='auto'
            />
          </div>
          <div>
            {data.map((country) => (
              <div key={country.cca3} className={'space-y-1'}>
                <div
                  className={
                    'absolute top-2 right-2 size-1/12 hidden md:block'
                  }>
                  <img
                    src={
                      country.coatOfArms.png
                        ? country.coatOfArms.png
                        : "https://placehold.co/600x400?text=Country's+Coat+Of+Arms"
                    }
                    alt='country flag'
                    width={200}
                    height={200}
                    loading='lazy'
                    decoding='auto'
                    className='object-contain w-full h-full'
                  />
                </div>
                <p>
                  Capital :
                  {country.capital
                    ? country.capital.map((capital, id) => (
                        <span key={id + 1}>
                          {id > 0 ? ', ' : ''} {capital}
                        </span>
                      ))
                    : 'N/A'}
                </p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Status: {country.status}</p>
                <p>Independent : {country.independent ? 'Yes' : 'No'}</p>
                <p>UN Member : {country.unMember ? 'Yes' : 'No'}</p>
                <p>Landlocked : {country.landlocked ? 'Yes' : 'No'}</p>
                <p>
                  Latitude and Longitude:{' '}
                  {country.latlng
                    ? country.latlng.map((latlng, id) => (
                        <span key={id + 1}>
                          {id > 0 ? ', ' : ''} {latlng}
                        </span>
                      ))
                    : 'N/A'}
                </p>
                <p>
                  Area: {country.area} km
                  <sup>2</sup>
                </p>
                <p>
                  Timezone:{' '}
                  {country.timezones.map((timezone, id) => (
                    <span key={id + 1}>
                      {id > 0 ? ', ' : ''}
                      {timezone}
                    </span>
                  ))}
                </p>
                <p>
                  Currency:{' '}
                  {country.currencies
                    ? Object.keys(country.currencies).map((currency, id) => (
                        <span key={id + 1}>
                          {id > 0 ? ', ' : ''}
                          {currency}
                        </span>
                      ))
                    : 'N/A'}
                </p>

                <p>
                  International Dialing Display:{' '}
                  <span>Root: {country.idd.root}</span> {', '}
                  Suffixes:{' '}
                  {country.idd.suffixes.map((suffix, id) => (
                    <span key={id + 1}>
                      {id > 0 ? ', ' : ''}
                      {suffix}
                    </span>
                  ))}
                </p>

                <p>
                  Alternate Spellings :{' '}
                  {country.altSpellings.map((altSpelling, id) => (
                    <span key={id + 1}>
                      {id > 0 ? ', ' : ''}
                      {altSpelling}
                    </span>
                  ))}
                </p>

                <p>
                  Translations:{' '}
                  {Object.keys(country.translations).map((translation, id) => (
                    <span key={id + 1} className={'uppercase'}>
                      {id > 0 ? ', ' : ''}
                      {translation}
                    </span>
                  ))}
                </p>

                <p>
                  Start Of Week:{' '}
                  <span className={'capitalize'}>{country.startOfWeek}</span>
                </p>

                <p>
                  Continents :{' '}
                  {country.continents.map((continent, id) => (
                    <span key={id + 1}>
                      {id > 0 ? ', ' : ''}
                      {continent}
                    </span>
                  ))}
                </p>

                <p>
                  Languages:{' '}
                  {country.languages
                    ? Object.keys(country.languages).map((language, id) => (
                        <span key={id + 1} className={'uppercase'}>
                          {id > 0 ? ', ' : ''}
                          {language}
                        </span>
                      ))
                    : 'N/A'}
                </p>

                <p>
                  Borders:{' '}
                  {country.borders
                    ? country.borders.map((border, id) => (
                        <span key={id + 1} className={'uppercase'}>
                          {id > 0 ? ', ' : ''}
                          <Badge variant={'outline'}>{border}</Badge>
                        </span>
                      ))
                    : 'N/A'}
                </p>

                <p>
                  Top-Level Domain:{' '}
                  {country.tld
                    ? country.tld.map((tld, id) => (
                        <span key={id + 1}>
                          {id > 0 ? ', ' : ''}
                          {tld}
                        </span>
                      ))
                    : 'N/A'}
                </p>

                <p>
                  Demonym :{' '}
                  {country.demonyms
                    ? Object.keys(country.demonyms).map((demonym, id) => (
                        <span key={id + 1}>
                          {id > 0 ? ', ' : ''}
                          {demonym}
                        </span>
                      ))
                    : 'N/A'}
                </p>

                <p>
                  Continents :{' '}
                  {country.continents.map((continent, id) => (
                    <span key={id + 1}>
                      {id > 0 ? ', ' : ''}
                      {continent}
                    </span>
                  ))}
                </p>

                <p>
                  {country.postalCode
                    ? Object.keys(country.postalCode).map((postalCode, id) => (
                        <span key={id + 1}>
                          {id > 0 ? ', ' : ''}
                          {postalCode}
                        </span>
                      ))
                    : 'N/A'}
                </p>
              </div>
            ))}
          </div>
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button asChild variant={'secondary'} className={'w-full'}>
          <Link to={'/countries'}>Back to Countries</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
