import Link from 'next/link';
import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  console.log(totalItems);
  return (
    <div className='pagination'>
      <div className='wrapper'>
        <Link href='#' className='btnPagination active'>
          1
        </Link>
        <Link href='#' className='btnPagination'>
          2
        </Link>
        <Link href='#' className='btnPagination'>
          3
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
