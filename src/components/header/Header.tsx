'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import Spinner from '../spinner/Spinner';

import { useSearch } from '@/hooks/useSearch';
import { useSearchStore } from '@/hooks/useSearchStore';

import './Header.scss';

const Header = () => {
  const isLoading = useSearchStore((store) => store.isLoading);
  const { searchQuery, inputRef, handleChange, handleClear, handleSubmit } =
    useSearch();

  const btnClearClasses = useMemo(() => {
    return searchQuery.length > 0 ? 'btnClear show' : 'btnClear hide';
  }, [searchQuery.length]);

  return (
    <header className='header'>
      <div className='container'>
        <h1>The best burger to share with your family</h1>
        <form className='search' onSubmit={handleSubmit}>
          <div className='searchInput'>
            <Image
              src='/img/search.png'
              width={20}
              height={20}
              alt='search icon'
              className='searchIcon'
            />
            <input
              type='text'
              ref={inputRef}
              className='search'
              value={searchQuery}
              placeholder='Search products...'
              onChange={handleChange}
            />
            <button
              type='button'
              disabled={!!isLoading}
              className={btnClearClasses}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <button disabled={!!isLoading} className='searchBtn'>
            {!!isLoading ? <Spinner /> : 'Find products'}
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
