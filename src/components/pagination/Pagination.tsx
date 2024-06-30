import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = ({ disabled }: PaginationProps) => {
  return (
    <div className='pagination'>
      <div className='wrapper'>
        <button
          type='button'
          disabled={disabled}
          className='btnPagination active'
        >
          1
        </button>
        <button type='button' disabled={disabled} className='btnPagination'>
          2
        </button>
        <button type='button' disabled={disabled} className='btnPagination'>
          3
        </button>
      </div>
    </div>
  );
};

export default Pagination;
