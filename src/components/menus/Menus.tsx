'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import ProductCard from '../productCard/ProductCard';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import { ProductType } from '@/types';
import { getFeaturedProducts } from '@/services/productService';

import EmptyState from '@/components/emptyState/EmptyState';

import './Menus.scss';

const Menus = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: async () => {
      const { data } = await getFeaturedProducts();
      return data;
    },
  });

  const [products, setProducts] = useState<ProductType[]>(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (products?.length < 1) {
    return (
      <EmptyState
        title='No featured products found!'
        subtitle='Temporarily, there are no featured products in the database.'
        imgSrc='empty'
      />
    );
  }

  return (
    <section className='menusContainer'>
      <div className='container'>
        <div className='headings'>
          <h2 className='heading'>Popular menu</h2>
          <div className='box'>
            <div className='icon'>
              <RoomServiceIcon />
            </div>
          </div>
        </div>
        <div className='wrapper'>
          {isLoading
            ? Array.from(Array(6)).map((_, index) => {
                return <ProductCardSkeleton key={index} />;
              })
            : products?.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onLike={setProducts}
                    onRefetch={refetch}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Menus;
