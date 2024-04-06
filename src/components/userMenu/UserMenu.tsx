import Link from 'next/link';

import './UserMenu.scss';

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
            <Link href='/profile'>Upcoming orders</Link>
            <Link href='/profile'>Account</Link>
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
