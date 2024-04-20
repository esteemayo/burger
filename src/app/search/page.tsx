import type { Metadata } from 'next';

import { products } from '@/data';
import ProductLists from '@/components/productLists/ProductLists';

import './Search.scss';

export const metadata: Metadata = {
  title: 'Burger - Search page',
};

const Search = () => {
  return (
    <div className='search'>
      <div className='container'>
      <h3>Search results for {`"${'query'}"`}</h3>
      <ProductLists products={products} />
      </div>
    </div>
  );
};

export default Search;
