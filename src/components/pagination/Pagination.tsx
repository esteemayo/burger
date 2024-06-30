import Link from 'next/link';

import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = ({
  query,
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  const pages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(new Array(pages), (_, i) => i + 1);

  return (
    <div className='pagination'>
      <div className='wrapper'>
        {pageNumbers.map((page) => {
          return (
            <Link
              key={page}
              href={`/search?q=${query}&page=${page}`}
              onClick={() => onPageChange(page)}
              className={`${
                currentPage === page ? 'btnPagination active' : 'btnPagination'
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
