'use client';

import Image from 'next/image';

import { useSearch } from '@/hooks/useSearch';

import './Header.scss';

const Header = () => {
  const { query, inputRef, handleChange, handleClear, handleSubmit } =
    useSearch();

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
              value={query}
              placeholder='Search products...'
              onChange={handleChange}
            />
            {query.length > 0 && (
              <button className='btnClear' onClick={handleClear}>
                Clear
              </button>
            )}
          </div>
          <button className='searchBtn'>Find burger</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
