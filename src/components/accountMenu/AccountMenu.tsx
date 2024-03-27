import Link from 'next/link';
import Image from 'next/image';

import { profileMenu } from '@/data';

import './AccountMenu.scss';

const AccountMenu = () => {
  return (
    <aside className='accountMenu'>
      <h1 className='profileHeader'>Your profile</h1>
      {profileMenu.map((item) => {
        const { label, links } = item;
        return (
          <>
            {links.map((link) => {
              const { id, url, icon, label } = link;
              return (
                <>
                  <div key={id} className='menuWrap'>
                    <span className='menuItem '>
                      <Link href={url}>
                        <Image
                          src={`/svg/${icon}.svg`}
                          width={25}
                          height={25}
                          alt={icon}
                        />
                        {label}
                      </Link>
                    </span>
                  </div>
                </>
              );
            })}
            {label !== 'bottom' && <hr />}
          </>
        );
      })}
    </aside>
  );
};

export default AccountMenu;
