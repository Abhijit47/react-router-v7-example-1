import { useEffect } from 'react';
import { Form } from 'react-router';
import { Input } from './ui/input';

export default function SearchRecipes({ query }: { query: string }) {
  useEffect(() => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('q');

    // form?.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   const value = (input as HTMLInputElement).value;
    //   window.location.href = `/recipes?q=${value}`;
    // };

    // form?.addEventListener('submit', handleSubmit);

    // return () => {
    //   form?.removeEventListener('submit', handleSubmit);
    // };
  }, []);

  return (
    <div>
      <Form id='search-form' role='search'>
        <Input
          type='search'
          placeholder='search a meal ...'
          id='q'
          name='q'
          defaultValue={query || ''}
          aria-label='Search for a meal'
        />
      </Form>
    </div>
  );
}
