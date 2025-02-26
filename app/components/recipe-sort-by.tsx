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

export default function RecipeSortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSortBy(value: string) {
    const sort =
      searchParams.get('sort') === value ? 'name' : value.toLocaleLowerCase();
    setSearchParams({ sort });
  }

  return (
    <Select onValueChange={handleSortBy}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Sort (A-Z) | (Z-A)' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value='name'>Name</SelectItem>
          <SelectItem value='difficulty'>Difficulty</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
