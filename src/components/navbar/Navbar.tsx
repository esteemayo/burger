'use client';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setShowMenu((value) => !value);
  }, []);

  const navClasses = useMemo(() => {
    return isActive ? 'navbar active' : 'navbar';
  }, [isActive]);

  const menuClasses = useMemo(() => {
    return showMenu ? 'userMenu active' : 'userMenu';
  }, [showMenu]);

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
            <Image
              src='/img/user.png'
              width={30}
              height={30}
              alt=''
              onMouseOver={handleToggleMenu}
            />
            <div className={menuClasses}>
              <Link href='/login'>Login</Link>
              <Link href='/register'>Register</Link>
            </div>
          </div>
          <div className='cart'>
            <ShoppingCartIcon />
            <span className='count'>3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
