import Link from 'next/link';

import './UserMenu.scss';
import Image from 'next/image';

interface UserMenuProps {
  currentUser: object;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  return (
    <div className='userMenu'>
      {!currentUser ? (
        <>
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
        </>
      ) : (
        <div className='userController'>
          <div className='userLinks'>
            <Link href='/profile'>
              <Image src='/svg/user-plus.svg' width={24} height={43} alt='' />
              <span>Upcoming orders</span>
            </Link>
            <Link href='/profile'>
              <Image src='/svg/user-plus.svg' width={24} height={43} alt='' />
              <span>Account</span>
            </Link>
          </div>
          <div className='userFooter'>
            <span>Not Emmanuel</span>
            <button type='button'>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
