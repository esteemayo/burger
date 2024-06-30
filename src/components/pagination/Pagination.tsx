import { PaginationProps } from '@/types';

import './Pagination.scss';

const Pagination = ({ disabled }: PaginationProps) => {
  return <div className='pagination'>
    <button type='button'>1</button>
    <button type='button'>2</button>
    <button type='button'>3</button>
  </div>;
};

export default Pagination;
