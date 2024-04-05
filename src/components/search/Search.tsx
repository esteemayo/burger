import Image from 'next/image';

import { SearchProps } from '@/types';

import './Search.scss';

const Search = ({ onSubmit }: SearchProps) => {
  return (
    <div className='searchForm'>
      <form onSubmit={onSubmit}>
        <input type='search' placeholder='Search products...' />
      </form>
      <Image src='/img/search.png' width={20} height={20} alt='search icon' />
    </div>
  );
};

export default Search;
