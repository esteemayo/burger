import type { Metadata } from 'next';

import EmptyState from '@/components/emptyState/EmptyState';
import SearchClient from '@/components/searchClient/SearchClient';

import { products } from '@/data';

import './Search.scss';

export const metadata: Metadata = {
  title: 'Burger - Search page',
};

const Search = () => {
  const empty = false;

  if (!empty) {
    return (
      <EmptyState
        title='No product found!'
        subtitle='No result matches your search criteria.'
        imgSrc='web-search'
        showReset
      />
    );
  }
  return (
    <div className='search'>
      <div className='container'>
        <SearchClient products={products} />
      </div>
    </div>
  );
};

export default Search;
