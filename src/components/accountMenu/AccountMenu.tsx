'use client';

import { Fragment, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import { profileMenu } from '@/data';
import { useAccountMenu } from '@/hooks/useAccountMenu';

import './AccountMenu.scss';

const AccountMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = useAccountMenu((state) => state.isOpen);
  const onClose = useAccountMenu((state) => state.onClose);

  const handleClose = useCallback(
    (_e: React.MouseEvent<HTMLDivElement>) => {
      if (!!isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  const activeClasses = useCallback(
    (url: string) => {
      return pathname === url ? 'menuItem active' : 'menuItem';
    },
    [pathname]
  );

  const menuClasses = useMemo(() => {
    return isOpen ? 'accountMenu active' : 'accountMenu';
  }, [isOpen]);

  return (
    <aside className={menuClasses}>
      {profileMenu.map((item) => {
        const { label, links } = item;
        return (
          <Fragment key={label}>
            {links.map((link) => {
              const { id, url, icon, label } = link;
              return (
                <Fragment key={id}>
                  <div className='menuWrap' onClick={handleClose}>
                    <span className={activeClasses(url)}>
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
    </aside>
  );
};

export default AccountMenu;
