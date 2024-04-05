import Link from 'next/link';

import './UserMenu.scss';

const UserMenu = () => {
  return (
    <div className='userMenu'>
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Link href='/profile'>User profile</Link>
    </div>
  );
};

export default UserMenu;
