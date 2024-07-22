'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

import { UserMenuProps } from '@/types';
import { authLinks, userLinks } from '@/data';

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
        </>
      ) : (
        <div className='userController'>
          <div className='userLinks'>
            {userLinks.map((link) => {
              const { id, url, icon, label } = link;
              return (
                <Link key={id} href={url} className='userLink'>
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
                      d={icon}
                    />
                  </svg>
                  <span className='userLabel'>{label}</span>
                </Link>
              );
            })}
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
