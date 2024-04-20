import type { Metadata } from 'next';

import { products } from '@/data';
import SearchClient from '@/components/searchClient/SearchClient';

import './Search.scss';

export const metadata: Metadata = {
  title: 'Burger - Search page',
};

const Search = () => {
  return (
    <div className='search'>
      <div className='container'>
        <SearchClient products={products} />
      </div>
    </div>
  );
};

export default Search;
