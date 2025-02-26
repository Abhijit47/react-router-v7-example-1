import RecipeOrderBy from '~/components/recipe-order-by';
import RecipeSortBy from '~/components/recipe-sort-by';
import RecipesCard from '~/components/recipes-card';
import SearchRecipes from '~/components/search-recipes';
import type { Route } from './+types/recipes';

export function meta({ data }: Route.MetaArgs) {
  return [
    {
      title: `Recipes (${data.data.total})`,
      description: `Recipes page found ${data.data.recipes.length} recipes`,
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{
  data: Recipes;
  q: string;
}> {
  const limit = 12;

  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const order = url.searchParams.get('order') || 'desc';
  const sort = url.searchParams.get('sort') || 'name';
  const encodedQ = encodeURIComponent(q.toLocaleLowerCase());

  const BASE_URL = process.env.RECIPE_BASE_URL;

  const API_URL = `${BASE_URL}?limit=${limit}&order=${order}&sort=${sort}`;
  const SEARCH_URL = `${BASE_URL}/search?q=${encodedQ}&order=${order}&sort=${sort}`;

  const signal = new AbortController().signal;
  const res = await fetch(q ? SEARCH_URL : API_URL, {
    cache: 'force-cache',
    signal,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = (await res.json()) as Recipes;

  return { data, q };
}

export function action({}: Route.ActionArgs) {
  return null;
}

export async function clientLoader({
  serverLoader,
  params,
}: Route.ClientLoaderArgs) {
  const recipes = await serverLoader();
  return recipes;
}

export default function RecipesPage({ loaderData }: Route.ComponentProps) {
  const { data, q } = loaderData;

  return (
    <main className={'py-8 md:py-12 lg:py-16 space-y-8'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        <div className={'flex items-center justify-between'}>
          <RecipeSortBy />

          <SearchRecipes query={q} />

          <RecipeOrderBy />
        </div>
      </section>

      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        <RecipesCard />
      </section>
    </main>
  );
}
