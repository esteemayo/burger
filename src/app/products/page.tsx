import Link from 'next/link';

import { products } from '@/data';
import ProductLists from '@/components/productLists/ProductLists';

import './Products.scss';

const Products = () => {
  return (
    <div className='products'>
      <div className='container'>
        <h3>
          Most popular near you
          <small>
            <Link href='/products'>12 main features</Link>
          </small>
        </h3>
        <ProductLists products={products} />
      </div>
    </div>
  );
};

export default Products;
