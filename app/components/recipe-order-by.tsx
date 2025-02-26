import { useSearchParams } from 'react-router';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';

export default function RecipeOrderBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleOrderBy() {
    const order = searchParams.get('order') === 'asc' ? 'desc' : 'asc';
    setSearchParams({ order });
  }

  return (
    <Select onValueChange={handleOrderBy}>
      <SelectTrigger className='w-[220px]'>
        <SelectValue placeholder='Order <ASC | DESC>' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Order By</SelectLabel>
          <SelectItem value='asc'>Ascending</SelectItem>
          <SelectItem value='desc'>Descending</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
