'use client';

import _ from 'lodash';
import Link from 'next/link';

import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = ({
  query,
  currentPage,
  itemsPerPage,
  totalItems,
  disabled,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  const pages = _.range(1, pagesCount + 1);

  // const pageNumbers = Array.from(new Array(pagesCount), (_, i) => i + 1);

  if (pagesCount === 1) {
    return;
  }

  return (
    <div className='pagination'>
      <div className='wrapper'>
        {pages.map((page) => {
          return (
            <Link key={page} href={`/search?q=${query}&page=${page}`}>
              <button
                type='button'
                disabled={disabled}
                onClick={() => onPageChange(page)}
                className={`${
                  currentPage === page
                    ? 'btnPagination active'
                    : 'btnPagination'
                }`}
              >
                {page}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
