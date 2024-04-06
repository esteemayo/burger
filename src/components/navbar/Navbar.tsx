'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

import CartCard from '../cartCard/CartCard';
import Logo from '../logo/Logo';
import UserMenu from '../userMenu/UserMenu';
import Search from '../search/Search';

import { useSearch } from '@/hooks/useSearch';
import { useCartStore } from '@/hooks/useCartStore';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();
  const { query, handleChange, handleSubmit } = useSearch();

  const totalPrice = useCartStore((store) => store.totalPrice);
  const products = useCartStore((store) => store.products);
  const removeFromCart = useCartStore((store) => store.removeFromCart);
  const totalItems = useCartStore((store) => store.totalItems);
  const toggleQuantity = useCartStore((store) => store.toggleQuantity);

  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
      e.stopPropagation();
      toggleQuantity({ type: 'inc', id: productId });
    },
    [toggleQuantity]
  );

  const handleDecrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
      e.stopPropagation();
      toggleQuantity({ type: 'dec', id: productId });
    },
    [toggleQuantity]
  );

  const navClasses = useMemo(() => {
    return isActive ? 'navbar active' : 'navbar';
  }, [isActive]);

  useEffect(() => {
    window.addEventListener('scroll', isActiveHandler);
    return () => window.removeEventListener('scroll', isActiveHandler);
  }, [isActiveHandler]);

  return (
    <nav className={navClasses}>
      <div className='wrapper'>
        <Logo />
        <div className='nav'>
          <Link href='/products'>
            <RoomServiceIcon />
            <span>Products</span>
          </Link>
          <div className='user'>
            <Image src='/img/user.png' width={30} height={30} alt='' />
            <UserMenu />
          </div>
          <div className='cart'>
            <Image
              src='/svg/shopping-cart.svg'
              width={24}
              height={24}
              alt='search icon'
            />
            <span className='count'>{totalItems}</span>
            <div className='cartBox'>
              <CartCard
                products={products}
                totalPrice={totalPrice}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={removeFromCart}
              />
            </div>
          </div>
          {pathname !== '/' &&
            pathname !== '/login' &&
            pathname !== '/register' && (
              <div className='search'>
                <Image
                  src='/svg/magnifying-glass.svg'
                  width={20}
                  height={20}
                  alt='search icon'
                />
                <Search
                  value={query}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </div>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
