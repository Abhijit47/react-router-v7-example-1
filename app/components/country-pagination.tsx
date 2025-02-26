import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Link, useLoaderData } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '~/components/ui/pagination';
import { Button } from './ui/button';

export default function CountryPagination(props: CountryPaginationProps) {
  const { page, perPage } = props;

  const { data } = useLoaderData<CountryResponse>();

  const totalPages = Math.ceil(data.length / perPage);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button asChild variant={'outline'} disabled={page === 1}>
              <Link
                to={{
                  pathname: '/countries',
                  search: `?page=${page === 1 ? 1 : page - 1}`,
                }}
                state={{
                  page: page === 1 ? 1 : page - 1,
                }}
                viewTransition>
                <span className={'sr-only'}>prev</span>
                <HiChevronLeft className={'size-4 md:size-6'} />
              </Link>
            </Button>
          </PaginationItem>
          <PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                asChild
                variant={'outline'}
                disabled={page === i + 1}>
                <Link
                  to={{
                    pathname: '/countries',
                    search: `?page=${i + 1}`,
                  }}
                  state={{
                    page: i + 1,
                  }}
                  viewTransition>
                  <span>{i + 1}</span>
                </Link>
              </Button>
            ))}
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <Button asChild variant={'outline'}>
              <Link
                to={{
                  pathname: '/countries',
                  search: `?page=${
                    page === totalPages ? totalPages : page + 1
                  }`,
                }}
                state={{
                  page: page === totalPages ? totalPages : page + 1,
                }}
                viewTransition>
                <span className={'sr-only'}>next</span>
                <HiChevronRight className={'size-4 md:size-6'} />
              </Link>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
