import Link from 'next/link';

import ProductLists from '@/components/productLists/ProductLists';

import './Products.scss';

const Products = () => {
  return (
    <div className='products'>
      <div className='container'>
        <h3 className='heading'>
          Most popular near you
          <small>
            <Link href='/products'>12 main features</Link>
          </small>
        </h3>
        <ProductLists />
      </div>
    </div>
  );
};

export default Products;
