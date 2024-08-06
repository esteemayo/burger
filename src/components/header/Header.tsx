'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

import { useSearch } from '@/hooks/useSearch';

import './Header.scss';

const Header = () => {
  const {
    searchQuery,
    inputRef,
    isLoading,
    handleChange,
    handleClear,
    handleSubmit
  } = useSearch();

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
              className={btnClearClasses}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <button disabled={isLoading} className='searchBtn'>
            {isLoading ? <ClipLoader size={20} color='#fff' /> : 'Find products'}
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
