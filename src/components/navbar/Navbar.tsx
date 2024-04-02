'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Image from 'next/image';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useCartStore } from '@/hooks/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';

import Logo from '../logo/Logo';

import './Navbar.scss';

const Navbar = () => {
  const pathname = usePathname();

  const products = useCartStore((store) => store.products);
  const totalItems = useCartStore((store) => store.totalItems);

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
            <span className='count'>{totalItems}</span>
            <div className='cartBox'>
              <div className='card'>
                {products.length < 1 ? (
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
                      {products.slice(0, 3).map((productItem) => {
                        const { id, name, price, quantity } = productItem;
                        return (
                          <div key={id} className='productBox'>
                            <span className='quantity'>{quantity}</span>
                            <div className='cardItem'>{name}</div>
                            <div className='cardButtons'>
                              <button type='button'>
                                <Image
                                  src='/svg/chevron-down.svg'
                                  width={17}
                                  height={17}
                                  alt='chevron-down icon'
                                />
                              </button>
                              <button type='button'>
                                <Image
                                  src='/svg/chevron-up.svg'
                                  width={17}
                                  height={17}
                                  alt='chevron-up icon'
                                />
                              </button>
                            </div>
                            <div className='deleteBtn'>
                              <RemoveShoppingCartIcon />
                            </div>
                            <span className='price'>
                              {formatCurrency(price)}
                            </span>
                          </div>
                        );
                      })}
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
