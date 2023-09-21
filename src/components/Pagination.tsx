import usePagination from "@lucasmogari/react-pagination";

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
};

export const Pagination = ({
  page,
  totalItems,
  perPage
}: PaginationProps) => {
  const { getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 3,
  });

  const firstPage = 1;
  const nextPage = Math.min(page + 1, totalPages);
  const prevPage = Math.max(page - 1, firstPage);

  const arr = new Array(totalPages + 2);

  return (
    <>
      <div>
        {...arr.map((_, index) => {
          const {page, disabled, current} = getPageItem(index);
          if(page === 'previous') {
            return (
              <span
                key={index}
              >
                {"<"}
              </span>
            )
          }
          if (page === 'next') {
            return (
              <span
                key={index}
              >
                {">"}
              </span>
            )
          }
          if (page === 'gap') {
            return (
              <span
                key={index}
              >
                ...
              </span>
            )
          }
          return(<span key={index}>{page}</span>)
        })}
      </div>
    </>
  )
}