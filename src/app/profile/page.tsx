import Link from 'next/link';
import WalletIcon from '@mui/icons-material/Wallet';

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
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>My orders</Link>
            </span>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Personal info</Link>
            </span>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Coupons</Link>
            </span>
          </div>
          <hr />
          <div className='menuWrap'>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Wallets</Link>
            </span>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Loyalty points</Link>
            </span>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Referral code</Link>
            </span>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Your address</Link>
            </span>
          </div>
          <hr />
          <div className='menuWrap'>
            <span className='menuItem'>
              <WalletIcon />
              <Link href='/'>Settings</Link>
            </span>
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
