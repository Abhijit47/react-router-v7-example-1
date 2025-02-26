declare type Country = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<
      CountryNativeCode,
      { official: string; common: string }
    >;
  };
  tld?: Array<string>;
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Record<CountryLanguage, { name: string; symbol: string }>;
  idd: {
    root: string;
    suffixes: Array<string>;
  };
  capital?: Array<string>;
  altSpellings: Array<string>;
  region: string;
  subregion?: string;
  languages?: Record<CountryLanguageCode, CountryLanguageValues>;
  translations: Record<
    CountryTranslations,
    { official: string; common: string }
  >;
  latlng?: Array<number>;
  landlocked: boolean;
  borders?: Array<string>;
  area: number;
  demonyms?: Record<CountryTranslations, { f: string; m: string }>;
  flag: string;
  maps: Record<'googleMaps' | 'openStreetMaps', string>;
  population: number;
  // gini?: Record<string, number>;
  // gini?: {
  //   // '2018': 33.1;
  //   [key: string]: number;
  // };
  gini?: {
    // '2018': 29.6;
    [key: string]: number;
    0.0;
  };
  fifa?: CountryFifaCode;
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
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: CountryStartOfWeek;
  capitalInfo: {
    latlng: Array<number>;
  };
  postalCode?: {
    format: string;
    regex: string;
  };
};

declare type CountryPaginationProps = {
  page: number;
  perPage: number;
};

declare type CountryResponse = {
  data: Array<Country>;
  q: string;
  filter: string;
};

declare type Recipe = {
  id: number;
  name: string;
  ingredients: Array<string>;
  instructions: Array<string>;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  caloriesPerServing: number;
  tags: Array<string>;
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: Array<string>;
};

declare type Recipes = {
  recipes: Array<Recipe>;
  total: number;
  skip: number;
  limit: number;
};

declare type Post = {
  id: number;
  title: string;
  body: string;
  tags: Array<string>;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

declare type Posts = {
  posts: Array<Post>;
  total: 251;
  skip: 0;
  limit: 30;
};
