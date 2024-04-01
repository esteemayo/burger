'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { profileMenu } from '@/data';

import './AccountMenu.scss';

const AccountMenu = () => {
  const pathname = usePathname();

  return (
    <aside className='accountMenu'>
      <h1 className='profileHeader'>Your profile</h1>
      {profileMenu.map((item) => {
        const { label, links } = item;
        return (
          <Fragment key={label}>
            {links.map((link) => {
              const { id, url, icon, label } = link;
              return (
                <Fragment key={id}>
                  <div className='menuWrap'>
                    <span
                      className={
                        pathname === url ? 'menuItem active' : 'menuItem'
                      }
                    >
                      <Image
                        src={`/svg/${icon}.svg`}
                        width={25}
                        height={25}
                        alt={icon}
                      />
                      <Link href={url}>{label}</Link>
                    </span>
                  </div>
                </Fragment>
              );
            })}
            {label !== 'bottom' && <hr />}
          </Fragment>
        );
      })}
      <button type='button' className='toggleBtn'>
        <Image
          src='/svg/chevron-right.svg'
          width={20}
          height={20}
          alt='arrow icon'
          className='sidebarToggleIcon'
        />
      </button>
    </aside>
  );
};

export default AccountMenu;
