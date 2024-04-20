'use client';

import { useSearchParams } from 'next/navigation';

import { SearchClientProps } from '@/types';
import ProductLists from '../productLists/ProductLists';

import './SearchClient.scss';

const SearchClient = ({ products }: SearchClientProps) => {
  const params = useSearchParams();
  const query = params.get('q');

  return (
    <div className='searchClient'>
      <h3>Search results for {`"${query}"`}</h3>
      <ProductLists products={products} />
    </div>
  );
};

export default SearchClient;
