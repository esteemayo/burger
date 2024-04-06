import Image from 'next/image';

import { SearchProps } from '@/types';

import './Search.scss';

const Search = ({ value, onChange, onSubmit }: SearchProps) => {
  return (
    <div className='searchForm'>
      <form onSubmit={onSubmit}>
        <input
          type='search'
          value={value}
          placeholder='Search products...'
          onChange={onChange}
        />
      </form>
      <Image src='/img/search.png' width={20} height={20} alt='search icon' />
    </div>
  );
};

export default Search;
