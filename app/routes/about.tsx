import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Page' },
    { name: 'description', content: 'Welcome to the About Page!' },
  ];
}

export default function AboutPage() {
  return (
    <main className={'py-8 md:py-12 lg:py-16'}>
      <section className={'max-w-[85em] mx-auto px-4 2xl:px-0 space-y-8'}>
        <Card
          className={
            'max-w-3xl mx-auto h-[calc(100dvh-16rem)] flex items-center justify-center flex-col'
          }>
          <CardHeader>
            <CardTitle>About Page</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className={'space-y-4'}>
              <p>
                Welcome to the About Page! This is a simple example of a Remix
                app that uses the new <code>remix-themes</code> package to
                support dynamic theming.
              </p>
              <p>
                The app has two themes: <code>light</code> and <code>dark</code>
                . You can switch between them using the theme switcher in the
                header.
              </p>
            </CardDescription>
          </CardContent>

          <CardContent>
            <CardDescription>
              <p>
                The app also uses the new <code>remix-form</code> package to
                handle form submissions. You can see an example of a simple
                contact form on the{' '}
                <Link to={'/contact-us'} className={'text-blue-600'}>
                  Contact Us Page
                </Link>
                .
              </p>
            </CardDescription>
          </CardContent>

          <CardContent>
            <CardDescription>
              <p>
                The app is built using the latest features of Remix, including
                the new <code>react-router</code> and{' '}
                <code>remix-features</code> packages. It also uses TypeScript
                and Tailwind CSS for styling.
              </p>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <p>
              <strong>Thanks for visiting!</strong>
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
