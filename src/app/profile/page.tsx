import AccountMenu from '@/components/accountMenu/AccountMenu';
import AccountSettings from '@/components/accountSettings/AccountSettings';

import './Profile.scss';

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
