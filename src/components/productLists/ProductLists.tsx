'use client';

import { useEffect, useState } from 'react';

import ProductCard from '../productCard/ProductCard';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import { ProductListsProps } from '@/types';

import './ProductLists.scss';

const ProductLists = ({ type, data, productToShow }: ProductListsProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <section className='productLists'>
      {isLoading
        ? data.map((item) => {
            return <ProductCardSkeleton key={item.id} />;
          })
        : type === 'products'
        ? data.slice(0, productToShow).map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })
        : data.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
    </section>
  );
};

export default ProductLists;
