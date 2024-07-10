'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';

import CartMenu from '../cartMenu/CartMenu';
import Logo from '../logo/Logo';
import UserMenu from '../userMenu/UserMenu';
import Search from '../search/Search';
import ToggleButton from '../toggleButton/ToggleButton';

import { useCartStore } from '@/hooks/useCartStore';
import { useSearch } from '@/hooks/useSearch';
import { useCartControls } from '@/hooks/useCartControls';
import { useSidebar } from '@/hooks/useSidebar';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { handleDecrement, handleIncrement } = useCartControls();
  const onOpen = useSidebar((store) => store.onOpen);
  const { searchQuery, handleChange, handleSubmit } = useSearch();

  const totalPrice = useCartStore((store) => store.totalPrice);
  const products = useCartStore((store) => store.products);
  const removeFromCart = useCartStore((store) => store.removeFromCart);
  const totalItems = useCartStore((store) => store.totalItems);

  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  const navClasses = useMemo(() => {
    return isActive ? 'navbar active' : 'navbar';
  }, [isActive]);

  const totalItemsLabel = useMemo(() => {
    return !session ? 0 : totalItems;
  }, [session, totalItems]);

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
            {!!session ? (
              <Image
                src={session.user.image ?? '/img/default.png'}
                width={30}
                height={30}
                alt='avatar'
                className='userAvatar'
              />
            ) : (
              <Image
                src='/img/user.png'
                width={30}
                height={30}
                alt='default avatar'
              />
            )}
            <UserMenu currentUser={session?.user} />
          </div>
          <div className='cart'>
            <Image
              src='/svg/shopping-cart.svg'
              width={24}
              height={24}
              alt='search icon'
              className='shoppingCartLogo'
            />
            <span className='count'>{totalItemsLabel}</span>
            <div className='cartBox'>
              <CartMenu
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
                  className='searchMenuIcon'
                />
                <Search
                  value={searchQuery}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </div>
            )}
        </div>
        <ToggleButton onOpen={onOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
