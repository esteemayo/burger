'use client';

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
      <Image
        src='/img/search.png'
        width={15}
        height={15}
        alt='search icon'
        className='searchInputIcon'
      />
    </div>
  );
};

export default Search;
