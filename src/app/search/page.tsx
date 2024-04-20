import { products } from '@/data';
import SearchClient from '@/components/searchClient/SearchClient';

import './Search.scss';

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
