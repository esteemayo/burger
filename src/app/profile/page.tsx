import type { Metadata } from 'next';

import AccountMenu from '@/components/accountMenu/AccountMenu';
import AccountSettings from '@/components/accountSettings/AccountSettings';

import './Profile.scss';

export const metadata: Metadata = {
  title: 'Burger - User profile page',
};

const Profile = () => {
  return (
    <div className='profile'>
      <div className='container'>
        <AccountMenu />
        <AccountSettings />
      </div>
    </div>
  );
};

export default Profile;
