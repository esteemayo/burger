'use client';

import Link from 'next/link';
import { Fragment, useMemo } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { profileMenu } from '@/data';
import { useAccountMenu } from '@/hooks/useAccountMenu';

import './AccountMenu.scss';

const AccountMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = useAccountMenu((state) => state.isOpen);
  const toggle = useAccountMenu((state) => state.toggle);

  const sidebarClasses = useMemo(() => {
    return isOpen ? 'accountMenu toggle' : 'accountMenu';
  }, [isOpen]);

  return (
    <aside className={sidebarClasses}>
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
                        onClick={() => router.push(url)}
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
      <button type='button' className='toggleBtn' onClick={toggle}>
        {isOpen ? (
          <Image
            src='/svg/chevron-right.svg'
            width={20}
            height={20}
            alt='arrow icon'
            className='sidebarToggleIcon'
          />
        ) : (
          <Image
            src='/svg/chevron-left.svg'
            width={20}
            height={20}
            alt='arrow icon'
            className='sidebarToggleIcon'
          />
        )}
      </button>
    </aside>
  );
};

export default AccountMenu;
