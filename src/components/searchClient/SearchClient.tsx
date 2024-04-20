'use client';

import { useSearch } from '@/hooks/useSearch';
import ProductLists from '../productLists/ProductLists';

import './SearchClient.scss';

const SearchClient = ({ products }) => {
  const { query } = useSearch();

  return (
    <div className='searchClient'>
      <h3>Search results for {`"${query}"`}</h3>
      <ProductLists products={products} />
    </div>
  );
};

export default SearchClient;
