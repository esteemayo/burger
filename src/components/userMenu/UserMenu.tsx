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
        <Link href='/profile'>User profile</Link>
      )}
    </div>
  );
};

export default UserMenu;
