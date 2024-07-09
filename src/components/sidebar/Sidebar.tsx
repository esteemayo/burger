'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import { authLinks, userLinks } from '@/data';

import './Sidebar.scss';

const Sidebar = () => {
  const { data: session } = useSession();

  const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    signOut({
      callbackUrl: '/',
    });
  }, []);

  return (
    <aside className='sidebar'>
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
        <div className='search'>
          <form onSubmit={() => console.log('submitted')}>
            <input
              type='search'
              value={''}
              placeholder='Search products...'
              onChange={(e) => console.log(e.target.value)}
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
      </div>
    </aside>
  );
};

export default Sidebar;
