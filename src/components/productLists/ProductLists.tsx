'use client';

import { useEffect, useState } from 'react';

import ProductCard from '../productCard/ProductCard';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import { ProductListsProps } from '@/types';

import './ProductLists.scss';

const ProductLists = ({ products }: ProductListsProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <section className='productLists'>
      {isLoading
        ? products.map((item) => {
            return <ProductCardSkeleton key={item.id} />;
          })
        : products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
    </section>
  );
};

export default ProductLists;
