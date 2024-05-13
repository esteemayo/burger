'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

import EmptyState from '@/components/emptyState/EmptyState';
import ProductLists from '@/components/productLists/ProductLists';

import { products } from '@/data';

import './Products.scss';

const ProductsClient = () => {
  const [data] = useState(products);
  const [productToShow, setProductToShow] = useState(6);

  const handleSeeMore = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setProductToShow((prev) => {
        return prev + 6;
      });
    },
    []
  );

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
            <Link href='/products'>{data.length} main features</Link>
          </small>
        </h3>
        <ProductLists
          type='products'
          data={data}
          productToShow={productToShow}
        />
        {productToShow < data.length && (
          <div className='btnContainer'>
            <button type='button' onClick={handleSeeMore}>
              See more...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsClient;
