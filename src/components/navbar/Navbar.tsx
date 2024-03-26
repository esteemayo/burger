'use client';

import RoomServiceIcon from '@mui/icons-material/RoomService';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Logo from '../logo/Logo';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const navClasses = useMemo(() => {
    return isActive ? 'navbar active' : 'navbar';
  }, [isActive]);

  useEffect(() => {
    window.addEventListener('scroll', isActiveHandler);
    return () => window.removeEventListener('scroll', isActiveHandler);
  }, [isActiveHandler]);

  const cart = [{ id: 1, name: 'Grilled chicken burger', price: 11999.0 }];

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
            <div className='userMenu'>
              <Link href='/login'>Login</Link>
              <Link href='/register'>Register</Link>
              <Link href='/profile'>User profile</Link>
            </div>
          </div>
          <div className='cart'>
            <Image
              src='/svg/shopping-cart.svg'
              width={24}
              height={24}
              alt='search icon'
            />
            <span className='count'>3</span>
            <div className='cartBox'>
              <div className='card'>
                {cart.length < 1 ? (
                  <>
                    <div className='cardHeader empty'>Empty cart</div>
                    <hr />
                    <div className='cartFooter'>
                      <Link href='/products' className='cartBtn'>
                        Continue shopping
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='cardHeader'>Your cart</div>
                    <div className='cardProductBox'>
                      <div className='productBox'>
                        <span className='quantity'>1</span>
                        <div className='cardItem'>Grilled chicken burger</div>
                        <div className='cardButtons'>
                          <button>
                            <ExpandMoreIcon />
                          </button>
                          <button>
                            <ExpandLessIcon />
                          </button>
                        </div>
                        <div className='deleteBtn'>
                          <RemoveShoppingCartIcon />
                        </div>
                        <span className='price'>$11999.0</span>
                      </div>
                    </div>
                    <div className='itemTotal'>
                      <span className='subTotal'>Items subtotal:</span>
                      <span>N subTotal</span>
                    </div>
                    <Link href='/checkout' className='checkoutBtn'>
                      Proceed to Checkout
                    </Link>
                  </>
                )}
              </div>
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
                <div className='searchForm'>
                  <form onSubmit={handleSubmit}>
                    <input type='search' placeholder='Search products...' />
                  </form>
                  <Image
                    src='/img/search.png'
                    width={20}
                    height={20}
                    alt='search icon'
                  />
                </div>
              </div>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
