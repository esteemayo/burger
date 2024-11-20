'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { useMemo } from 'react';

import { useLogout } from '@/hooks/useLogout';
import { useSearch } from '@/hooks/useSearch';

import { useScroll } from '@/hooks/useScroll';
import { useCartControls } from '@/hooks/useCartControls';

import { authLinks, sidebarMenus } from '@/data';

import './Sidebar.scss';

const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { isActive } = useScroll();
  const { cartQuantity } = useCartControls();

  const { isOpen, handleClose, handleLogout } = useLogout();
  const { searchQuery, handleChange, handleSubmit } = useSearch();

  const sidebarClasses = useMemo(() => {
    return !!isOpen ? 'sidebar show' : 'sidebar hide';
  }, [isOpen]);

  const activeClasses = useMemo(() => {
    return !!isOpen && isActive ? 'active' : 'inActive';
  }, [isActive, isOpen]);

  return (
    <aside className={`${sidebarClasses} ${activeClasses}`}>
      <div className='container'>
        <ul className='lists'>
          <li onClick={handleClose}>
            <Link href='/products'>
              <RoomServiceIcon />
              <span>Products</span>
            </Link>
          </li>
          {sidebarMenus.map((menu) => {
            const { id, url, icon, label } = menu;
            return (
              <li key={id} onClick={handleClose}>
                <Link href={url}>
                  <Image
                    src={`/svg/${icon}.svg`}
                    width={15}
                    height={15}
                    alt=''
                  />
                  <span className='userLabel'>{label}</span>
                </Link>
              </li>
            );
          })}
          {!session?.user.isAdmin && (
            <li onClick={handleClose}>
              <Image
                src='/svg/shopping-cart.svg'
                width={15}
                height={15}
                alt='search icon'
                className='shoppingCartLogo'
              />
              <span className='count'>
                <Link href='/checkout'>Cart ({cartQuantity})</Link>
              </span>
            </li>
          )}
        </ul>
        {pathname !== '/' &&
          pathname !== '/login' &&
          pathname !== '/register' && (
            <div className='search'>
              <form onSubmit={handleSubmit}>
                <input
                  type='search'
                  value={searchQuery}
                  placeholder='Search products...'
                  onChange={handleChange}
                />
              </form>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
          )}
        <div className='userBox'>
          {!!session ? (
            <div className='currentUser'>
              <span>{session?.user.name}</span>
              <button type='button' onClick={handleLogout}>
                Sign out
              </button>
            </div>
          ) : (
            <div className='userAuth'>
              {authLinks.map((item) => {
                const { id, url, icon, label, urlName, imgName } = item;
                return (
                  <Link
                    key={id}
                    href={url}
                    className={urlName}
                    onClick={handleClose}
                  >
                    <Image
                      src={`/svg/${icon}.svg`}
                      width={13}
                      height={13}
                      alt={`${label.toLowerCase()} logo`}
                      className={imgName}
                    />
                    {label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
