'use client';

import { useSearch } from '@/hooks/useSearch';
import ProductLists from '../productLists/ProductLists';
import { SearchClientProps } from '@/data';

import './SearchClient.scss';

const SearchClient = ({ products }: SearchClientProps) => {
  const { query } = useSearch();

  return (
    <div className='searchClient'>
      <h3>Search results for {`"${query}"`}</h3>
      <ProductLists products={products} />
    </div>
  );
};

export default SearchClient;
