'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

import './Header.scss';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setQuery('');
    inputRef.current?.focus();
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      console.log(query);
    },
    [query]
  );

  return (
    <header className='header'>
      <div className='container'>
        <h1>The best burger to share with your family</h1>
        <div className='search'>
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
              placeholder='Search burger...'
              onChange={handleChange}
            />
            {query.length > 0 && (
              <button className='btnClear' onClick={handleClear}>
                Clear
              </button>
            )}
          </div>
          <button className='searchBtn' onClick={handleClick}>
            Find burger
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
