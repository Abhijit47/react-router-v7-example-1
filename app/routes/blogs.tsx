import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import type { Route } from './+types/blogs';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: 'Blogs',
      description: 'Blogs',
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<Posts> {
  const BASE_URL = process.env.BLOG_BASE_URL;

  const signal = new AbortController().signal;

  const res = await fetch(BASE_URL, {
    cache: 'force-cache',
    signal,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = (await res.json()) as Posts;

  return data;
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const data = await serverLoader();

  return data;
}

export default function BlogsPage({ loaderData }: Route.ComponentProps) {
  const posts = loaderData.posts;

  return (
    <main className={'py-8 md:py-12 lg:py-16'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        {/* Future blog posts will be rendered here */}
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'}>
          {posts.map((post) => (
            <Card key={post.id} className={''}>
              <CardHeader>
                <CardTitle className={'line-clamp-1'}>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={'space-y-2'}>
                  <p className={'line-clamp-6'}>{post.body}</p>
                  <p>
                    Reactions: {post.reactions.likes} likes,{' '}
                    {post.reactions.dislikes} dislikes
                  </p>
                  <p>Views: {post.views}</p>
                  <p>Tags: {post.tags.join(', ')}</p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant={'secondary'} className={'w-full'}>
                  <Link to={`/blogs/${post.id}`} prefetch='intent'>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
