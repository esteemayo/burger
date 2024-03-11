'use client';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
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
        <div className='logo'>
          <Link href='/'>
            <h1>Burger</h1>
          </Link>
        </div>
        <div className='nav'>
          <Link href='/'>
            <RoomServiceIcon />
            <span>Products</span>
          </Link>
          <div className='user'>
            <Image src='/img/user.png' width={30} height={30} alt='' />
            <div className='userMenu'>
              <div className='wrapper'>
                <Link href='/'>Login</Link>
                {/* <Link href='/'>Register</Link> */}
              </div>
            </div>
          </div>
          <div className='cart'>
            <ShoppingCartIcon />
            <span>3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
