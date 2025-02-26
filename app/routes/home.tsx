import { Link } from 'react-router';
import type { Route } from './+types/home';
import HERO_BG from '/hero.svg';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Home Page' },
    { name: 'description', content: 'Welcome to the Home Page!' },
  ];
}

export default function HomePage() {
  return (
    <main className={'max-w-[85em] mx-auto px-4 2xl:px-0'}>
      <section
        className={
          'relative h-[calc(100vh-4rem)] md:h-full grid place-items-center'
        }>
        <div
          className={
            'space-y-4 w-full h-full absolute grid place-content-center z-10'
          }>
          <h1
            className={
              'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center'
            }>
            Rest Countries
          </h1>
          <p
            className={
              'text-center font-medium lg:font-semibold text-base sm:text-lg md:text-xl lg:text-2xl'
            }>
            Explore the world through countries. Click on a country to learn
            more about it.
          </p>

          <div className={'flex items-center justify-center'}>
            <Link
              to='/countries'
              className='px-6 py-2 text-white transition-all duration-300 ease-in-out delay-150 bg-indigo-700 rounded-full shadow-lg hover:shadow-sm hover:bg-indigo-500'>
              Go to Countries Page
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HERO_BG}
            alt='A hero background'
            width={2807}
            height={1604}
            fetchPriority='high'
            loading='eager'
            decoding='async'
            className={'w-full h-full opacity-25'}
          />
        </div>
      </section>
    </main>
  );
}
