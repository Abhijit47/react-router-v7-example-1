import RecipeCard from '~/components/recipe-card';
import type { Route } from './+types/recipe';

export function meta({ data }: Route.MetaArgs) {
  return [
    {
      title: `Recipe | ${data.name}`,
      description: 'Recipe page',
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<Recipe> {
  const url = new URL(request.url);
  const recipeId = url.pathname.split('/').pop();

  const signal = new AbortController().signal;
  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`, {
    cache: 'force-cache',
    signal,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recipe');
  }
  const data = (await res.json()) as Recipe;
  return data;
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const recipe = await serverLoader();
  return recipe;
}

export default function RecipePage({ loaderData }: Route.ComponentProps) {
  return (
    <main className={'py-8 md:py-12 lg:py-16'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        <RecipeCard />
      </section>
    </main>
  );
}
