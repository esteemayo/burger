import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = () => {
  return (
    <div className='pagination'>
      <div className='wrapper'>
        <button type='button' className='btnPagination active'>
          1
        </button>
        <button type='button' className='btnPagination'>
          2
        </button>
        <button type='button' className='btnPagination'>
          3
        </button>
      </div>
    </div>
  );
};

export default Pagination;
