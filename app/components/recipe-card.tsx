import { Link, useLoaderData } from 'react-router';
import Rating from '~/components/Rating';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Label } from '~/components/ui/label';

export default function RecipeCard() {
  const recipe = useLoaderData() as Recipe;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}>
          <div>
            <img
              src={recipe.image}
              alt={recipe.name}
              width={500}
              height={500}
              className={
                'w-full h-full object-cover rounded-lg saturate-50 drop-shadow-lg hover:saturate-100 transition-all duration-300'
              }
            />
          </div>
          <div className={'space-y-4'}>
            <CardDescription>
              <p>
                Cuisine : {recipe.cuisine} | Servings : {recipe.servings}{' '}
                persons | Calories : {recipe.caloriesPerServing} kcal
              </p>
              <p>Difficulty : {recipe.difficulty}</p>
              <p>
                Cooktime : {recipe.cookTimeMinutes}min | Preptime :{' '}
                {recipe.prepTimeMinutes}min
              </p>
            </CardDescription>
            <CardDescription>
              <Label>Ingredients</Label>
              <ul className={'list-disc list-inside'}>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </CardDescription>

            <CardDescription>
              <Label>Instructions</Label>
              <ul className={'list-disc list-inside'}>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </CardDescription>

            <CardDescription>
              <Label>Meal Type</Label>
              <ul className={'list-disc list-inside'}>
                {recipe.mealType.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </CardDescription>

            <CardDescription>
              <Label>Tags</Label>
              <ul className={'list-disc list-inside'}>
                {recipe.tags.map((tag, index) => (
                  <li key={index}>
                    <Badge variant={'outline'}>{tag}</Badge>
                  </li>
                ))}
              </ul>
            </CardDescription>

            <CardDescription>
              <p>Rating: {recipe.reviewCount}</p>
              <Rating rating={recipe.rating} />
            </CardDescription>

            <Button asChild className={'w-full'} variant={'link'}>
              <Link to={'/recipes'}>Back to Recipes</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
