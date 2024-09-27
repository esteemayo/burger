import type { Metadata } from 'next';

import AccountMenu from '@/components/accountMenu/AccountMenu';
import AccountSettings from '@/components/accountSettings/AccountSettings';

import './Profile.scss';

export const metadata: Metadata = {
  title: 'Burger. App | User Profile',
};

const Profile = () => {
  return (
    <div className='profile'>
      <div className='container'>
        <h1 className='profileHeader'>Your profile</h1>
        <button className='toggleBtn' type='button'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='size-5'
          >
            <path
              fillRule='evenodd'
              d='M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='profileWrap'>
          <AccountMenu />
          <AccountSettings />
        </div>
      </div>
    </div>
  );
};

export default Profile;
