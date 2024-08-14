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

import { useSidebar } from '@/hooks/useSidebar';
import { useAvatar } from '@/hooks/useAvatar';
import { useCartStore } from '@/hooks/useCartStore';
import { useSearch } from '@/hooks/useSearch';
import { useCartControls } from '@/hooks/useCartControls';

import Avatar from '../avatar/Avatar';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const onOpen = useSidebar((store) => store.onOpen);
  const totalPrice = useCartStore((store) => store.totalPrice);
  const products = useCartStore((store) => store.products);
  const removeFromCart = useCartStore((store) => store.removeFromCart);

  const { searchQuery, handleChange, handleSubmit } = useSearch();
  const { avatar } = useAvatar(session?.user);
  const { cartQuantity, handleDecrement, handleIncrement } = useCartControls();

  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

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
            {status !== 'loading' && (
              <>
                {!!session ? (
                  <Avatar imgSrc={avatar} />
                ) : (
                  <Avatar imgSrc='/img/user.png' desc='default avatar' />
                )}
              </>
            )}
            <UserMenu currentUser={session?.user} />
          </div>
          <div className='cart'>
            {status !== 'loading' && (
              <>
                <Image
                  src='/svg/shopping-cart.svg'
                  width={24}
                  height={24}
                  alt='search icon'
                  className='shoppingCartLogo'
                />
                <span className='count'>{cartQuantity}</span>
              </>
            )}
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
