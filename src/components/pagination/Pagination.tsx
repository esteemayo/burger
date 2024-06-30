import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = ({ disabled }: PaginationProps) => {
  return <div className='pagination'>
    <button type='button' disabled={disabled}>1</button>
    <button type='button' disabled={disabled}>2</button>
    <button type='button' disabled={disabled}>3</button>
  </div>;
};

export default Pagination;
