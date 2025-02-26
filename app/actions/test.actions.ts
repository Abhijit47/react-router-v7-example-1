// import {
//   type CountryCarSide,
//   type CountryLanguage,
//   type CountryLanguageCode,
//   type CountryLanguageValues,
//   type CountryNativeCode,
//   type CountryStartOfWeek,
//   type CountryTranslations,
// } from '../../types/countries';

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: Record<CountryNativeCode, { official: string; common: string }>;
  };
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<CountryLanguage, { name: string; symbol: string }>;
  idd: {
    root: string;
    suffixes: Array<string>;
  };
  capital: Array<string>;
  altSpellings: Array<string>;
  region: string;
  subregion?: string;
  languages: Record<CountryLanguageCode, CountryLanguageValues>;
  translations: Record<
    CountryTranslations,
    { official: string; common: string }
  >;
  latlng: Array<number>;
  landlocked: boolean;
  borders: Array<string>;
  area: number;
  demonyms: Record<CountryTranslations, { f: string; m: string }>;
  flag: string;
  maps: Record<'googleMaps' | 'openStreetMaps', string>;
  population: number; // changed to number for consistency
  gini?: Record<string, number>;
  fifa?: 'BHU';
  car: {
    signs: Array<string>;
    side: CountryCarSide;
  };
  timezones: Array<string>;
  continents: Array<string>;
  flags: {
    png: string;
    svg: string;
    alt?: string; // Make alt optional
  };
  coatOfArms: Record<string, string>;
  startOfWeek: CountryStartOfWeek;
  capitalInfo: Record<'latlng', Array<number>> | object;
  postalCode: Record<'format' | 'regex', string> | object;
};

export async function getCountriesData() {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = (await response.json()) as Array<Country>;

  console.log(data.length);

  // const nativeNameKeyList = data.map((country: Country) => {
  //   return country.name.nativeName
  //     ? Object.keys(country.name.nativeName).map((key) => key)
  //     : '';
  // });

  // console.log(nativeNameKeyList);

  // const uniqueNativeNameKey = [...new Set(nativeNameKeyList.flat())];
  // console.log(uniqueNativeNameKey);

  // const langShortCodeList = data.map((country: Country) => {
  //   return country.languages
  //     ? Object.values(country.languages).map((lang) => lang)
  //     : '';
  // });

  // console.log(langShortCodeList);

  // const uniqueLangShortCode = [...new Set(langShortCodeList.flat())];
  // console.log(uniqueLangShortCode);

  // we want to take the currencies inside the key stored in the array
  // const currenciesNameList = data.map((country: Country) => {
  //   return country.currencies
  //     ? Object.keys(country.currencies).map((key) => key)
  //     : '';
  // });

  // Log the currenciesNameList to see the output
  // console.log(currenciesNameList);

  // const uniqueCurrencies = [...new Set(currenciesNameList.flat())];
  // console.log(uniqueCurrencies);

  // write the data to a file
  // await fs.writeFile(
  //   path.join(process.cwd(), 'lib', 'actions', 'native-keys.text'),
  //   JSON.stringify(uniqueNativeNameKey, null, 2),
  //   'utf-8'
  // );

  return null;
}

await getCountriesData(); // run the function
