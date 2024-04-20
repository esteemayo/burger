import { products } from '@/data';
import ProductLists from '@/components/productLists/ProductLists';

import './Search.scss';

const Search = () => {
  return (
    <div className='search'>
      <div className='container'>
        <h3>Search results for {'query'}</h3>
        <ProductLists products={products} />
      </div>
    </div>
  );
};

export default Search;
