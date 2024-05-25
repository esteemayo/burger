'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import './UserMenu.scss';

const UserMenu = () => {
  const { data: session } = useSession();

  return (
    <div className='userMenu'>
      {!session ? (
        <>
          <Link href='/login' className='loginLink'>
            <Image
              src='/svg/signin.svg'
              width={13}
              height={13}
              alt='login logo'
              className='loginLogo'
            />
            Login
          </Link>
          <Link href='/register' className='registerLink'>
            <Image
              src='/svg/signup.svg'
              width={13}
              height={13}
              alt='register logo'
              className='registerLogo'
            />
            Register
          </Link>
        </>
      ) : (
        <div className='userController'>
          <div className='userLinks'>
            <Link href='/orders'>
              <Image
                src='/svg/shopping-cart.svg'
                width={30}
                height={30}
                alt=''
              />
              <span className='userLabel'>Upcoming orders</span>
            </Link>
            <Link href='/profile'>
              <Image src='/svg/user.svg' width={30} height={30} alt='' />
              <span className='userLabel'>Account</span>
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
