'use client';

import { useEffect, useState } from 'react';

import RelatedProduct from '../relatedProduct/RelatedProduct';
import RelatedCardSkeleton from '../relatedCardSkeleton/RelatedCardSkeleton';

import { relatedProducts } from '@/data';

import './RelatedProducts.scss';

interface RelatedProductsProps {
  productId: string;
}

const RelatedProducts = ({ productId }: RelatedProductsProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <section className='relatedProducts'>
      <div className='container'>
        <h2 className='relatedHeader'>Related products</h2>
        <div className='relatedWrap'>
          {isLoading
            ? relatedProducts.map((item) => {
                return <RelatedCardSkeleton key={item.id} />;
              })
            : relatedProducts.map((product) => {
                return <RelatedProduct key={product.id} product={product} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
