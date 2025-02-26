import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Skeleton } from './ui/skeleton';

export default function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-8 w-full rounded-full' />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Skeleton className='aspect-square w-full h-full' />
      </CardContent>
      <CardContent>
        <CardDescription className={'space-y-2'}>
          <Skeleton className='h-4 w-[200px]' />
          <Skeleton className='h-4 w-[200px]' />
        </CardDescription>
      </CardContent>

      <CardFooter className={'inline-grid gap-2'}>
        <Skeleton className='h-8 w-full' />
      </CardFooter>
    </Card>
  );
}
