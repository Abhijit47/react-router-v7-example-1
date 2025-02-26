import { useIntersectionObserver } from 'usehooks-ts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

import { Link, useLoaderData } from 'react-router';
import { Button, buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import SkeletonCard from './skeleton-card';
import { Skeleton } from './ui/skeleton';

export default function RecipesCard() {
  const { data } = useLoaderData<{ data: Recipes }>();
  const recipes = data.recipes;
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    root: null,
    rootMargin: '-500px',
    threshold: 0.1,
    initialIsIntersecting: true,
  });

  return (
    <div
      ref={ref}
      className={
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'
      }>
      {!recipes ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          {recipes.map((recipe) => (
            <Card key={recipe.id}>
              <CardHeader>
                <CardTitle>{recipe.cuisine}</CardTitle>
              </CardHeader>

              {isIntersecting ? (
                <CardContent>
                  <Skeleton className='aspect-square w-full h-full' />
                </CardContent>
              ) : (
                <CardContent>
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    width={500}
                    height={500}
                    loading={isIntersecting ? 'eager' : 'lazy'}
                    decoding={isIntersecting ? 'auto' : 'async'}
                    fetchPriority={isIntersecting ? 'high' : 'auto'}
                    className={
                      'object-cover w-full h-full rounded-lg saturate-50 drop-shadow-lg hover:saturate-100 transition-all duration-300 hover:scale-105'
                    }
                  />
                </CardContent>
              )}
              <CardContent>
                <CardDescription>
                  <p>{recipe.name}</p>
                </CardDescription>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className={cn(
                    buttonVariants({
                      className: 'bg-indigo-500 text-white',
                      variant: 'outline',
                      size: 'default',
                    }),
                    'w-full'
                  )}>
                  <Link to={`/recipes/${recipe.id}`} prefetch='intent'>
                    View Recipe
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
