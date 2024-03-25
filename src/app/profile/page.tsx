import Link from 'next/link';

import AccountInfo from '@/components/accountInfo/AccountInfo';
import AccountDetails from '@/components/accountDetails/AccountDetails';

import './Profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='container'>
        <aside className='left'>
          <h1>Your profile</h1>
          <div className='menuWrap'>
            <Link href='/'>My orders</Link>
            <Link href='/'>Personal info</Link>
            <Link href='/'>Coupons</Link>
          </div>
          <hr />
          <div className='menuWrap'>
            <Link href='/'>Wallets</Link>
            <Link href='/'>Loyalty points</Link>
            <Link href='/'>Referral code</Link>
            <Link href='/'>Your address</Link>
          </div>
          <hr />
          <div className='menuWrap'>
            <Link href='/'>Settings</Link>
          </div>
        </aside>
        <section className='right'>
          <AccountInfo />
          <AccountDetails />
        </section>
      </div>
    </div>
  );
};

export default Profile;
