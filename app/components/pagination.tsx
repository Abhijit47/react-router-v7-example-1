import { Pagination } from '@ark-ui/react/pagination';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2';
import { useLoaderData, useSearchParams } from 'react-router';

export function BasicPagination() {
  const { data } = useLoaderData<CountryResponse>();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Pagination.Root
      count={data.length}
      pageSize={8}
      siblingCount={2}
      className={'flex items-center gap-4'}
      page={Number(searchParams.get('page')) || 1}
      onPageChange={(pageInfo) => {
        const { page, pageSize } = pageInfo;
        setSearchParams({
          page: String(page),
        });
      }}>
      <Pagination.PrevTrigger
        className={
          'ring-1 ring-foreground p-1 rounded-md shadow-lg hover:shadow-sm'
        }>
        <span>
          <HiChevronDoubleLeft className={'size-4 md:size-6'} />
        </span>
        <span className={'sr-only'}>Previous Page</span>
      </Pagination.PrevTrigger>
      <Pagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <Pagination.Item
                onClick={() => {
                  setSearchParams({ page: String(page.value) });
                }}
                key={index}
                {...page}
                className={'ring-1 ring-foreground px-2 rounded-sm'}>
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis
                key={index}
                index={index}
                className={'ring-1 ring-foreground px-2 rounded-sm'}>
                &#8230;
              </Pagination.Ellipsis>
            )
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger
        className={
          'ring-1 ring-foreground p-1 rounded-md shadow-lg hover:shadow-sm'
        }>
        <span>
          <HiChevronDoubleRight className={'size-4 md:size-6'} />
        </span>
        <span className={'sr-only'}>Next Page</span>
      </Pagination.NextTrigger>
    </Pagination.Root>
  );
}
