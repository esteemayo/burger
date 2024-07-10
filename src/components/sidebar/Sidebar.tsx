'use client';

import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import { useSearch } from '@/hooks/useSearch';
import { useSidebar } from '@/hooks/useSidebar';

import { authLinks, userLinks } from '@/data';

import './Sidebar.scss';

const Sidebar = () => {
  const { data: session } = useSession();

  const isOpen = useSidebar((store) => store.isOpen);
  const onClose = useSidebar((store) => store.onClose);

  const { searchQuery, handleChange, handleSubmit } = useSearch();

  const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    signOut({
      callbackUrl: '/',
    });
  }, []);

  const sidebarClasses = useMemo(() => {
    return !!isOpen ? 'sidebar show' : 'sidebar';
  }, [isOpen]);

  return (
    <aside className={sidebarClasses}>
      <div className='container'>
        <ul className='lists'>
          <li>
            <Link href='/products'>
              <RoomServiceIcon />
              <span>Products</span>
            </Link>
          </li>
          {userLinks.map((link) => {
            const { id, url, icon, label } = link;
            return (
              <li key={id}>
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
          <li>
            <Image
              src='/svg/shopping-cart.svg'
              width={15}
              height={15}
              alt='search icon'
              className='shoppingCartLogo'
            />
            <span className='count'>
              <Link href='/checkout'>Cart ({0})</Link>
            </span>
          </li>
        </ul>
        <div className='search'>
          <form onSubmit={handleSubmit}>
            <input
              type='search'
              value={searchQuery}
              placeholder='Search products...'
              onChange={handleChange}
            />
          </form>
          <Image
            src='/img/search.png'
            width={15}
            height={15}
            alt='search icon'
            className='searchIcon'
          />
        </div>
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
                  <Link key={id} href={url} className={urlName}>
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
        <div className='btnCloseWrap'>
          <button onClick={onClose} type='button' className='btnClose'>
            <Image
              src='/svg/x-mark.svg'
              width={15}
              height={15}
              alt='close icon'
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
