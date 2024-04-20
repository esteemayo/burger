'use client';

import { useSearchParams } from 'next/navigation';
import './SearchClient.scss';
import ProductLists from '../productLists/ProductLists';

const SearchClient = ({ products }) => {
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
