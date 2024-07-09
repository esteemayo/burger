import Image from 'next/image';
import Link from 'next/link';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import { userLinks } from '@/data';

import './Sidebar.scss';

const Sidebar = () => {
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
      </div>
    </aside>
  );
};

export default Sidebar;
