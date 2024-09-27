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
        <button className='toggleBtn active' type='button'>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
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
