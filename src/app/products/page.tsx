import Link from 'next/link';
import type { Metadata } from 'next';

import { products } from '@/data';
import ProductLists from '@/components/productLists/ProductLists';

import './Products.scss';
import EmptyState from '@/components/emptyState/EmptyState';

export const metadata: Metadata = {
  title: 'Burger - Products page',
};

const Products = () => {
  if (products.length < 1) {
    return (
      <EmptyState
        title='No products found!'
        subtitle='Temporarily, there are no products in the database.'
        imgSrc='empty'
        showReset
      />
    );
  }

  return (
    <div className='products'>
      <div className='container'>
        <h3>
          Most popular near you
          <small>
            <Link href='/products'>{products.length} main features</Link>
          </small>
        </h3>
        <ProductLists products={products} />
        <div className='btnContainer'>
          <button type='button'>See more...</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
