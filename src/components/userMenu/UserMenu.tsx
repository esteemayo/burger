'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import { authLinks } from '@/data';
import { UserMenuProps } from '@/types';

import './UserMenu.scss';

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    signOut({
      callbackUrl: '/',
    });
  }, []);

  return (
    <div className='userMenu'>
      {!currentUser ? (
        <>
          {authLinks.map((item) => {
            const { id, url, label, logo, urlName, imgName } = item;
            return (
              <Link key={id} href={url} className={urlName}>
                <Image
                  src={`/svg/${logo}.svg`}
                  width={13}
                  height={13}
                  alt={`${label.toLowerCase()} logo`}
                  className={imgName}
                />
                {label}
              </Link>
            );
          })}
        </>
      ) : (
        <div className='userController'>
          <div className='userLinks'>
            <Link href='/orders'>
              <Image
                src='/svg/shopping-cart.svg'
                width={30}
                height={30}
                alt=''
              />
              <span className='userLabel'>Upcoming orders</span>
            </Link>
            <Link href='/profile'>
              <Image src='/svg/user.svg' width={30} height={30} alt='' />
              <span className='userLabel'>Account</span>
            </Link>
          </div>
          <div className='userFooter'>
            <span>{currentUser.name}</span>
            <button type='button' onClick={handleLogout}>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
