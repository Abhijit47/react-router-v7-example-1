import { Form, useLoaderData } from 'react-router';
import { Input } from './ui/input';

export default function CountrySearch() {
  const { q } = useLoaderData<CountryResponse>();

  return (
    <Form id='country-search-form' role='search-form'>
      <Input
        type='search'
        placeholder='Search countries ...'
        id='q'
        name='q'
        defaultValue={q || ''}
      />
    </Form>
  );
}
