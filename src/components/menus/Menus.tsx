'use client';

import { useState } from 'react';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import ProductCard from '../productCard/ProductCard';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import { cardMenus } from '@/data';

import './Menus.scss';

const Menus = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          {isLoading ? (
            <ProductCardSkeleton value={12} />
          ) : (
            cardMenus.map((menu) => {
              return <ProductCard key={menu.id} product={menu} />;
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Menus;
