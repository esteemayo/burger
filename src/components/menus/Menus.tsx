'use client';

import { useQuery } from '@tanstack/react-query';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import ProductCard from '../productCard/ProductCard';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import { getFeaturedProducts } from '@/services/productService';

import './Menus.scss';

const Menus = () => {
  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await getFeaturedProducts();
      return data;
    },
  });

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
            ? products?.map((item) => {
                return <ProductCardSkeleton key={item.id} />;
              })
            : products?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default Menus;
