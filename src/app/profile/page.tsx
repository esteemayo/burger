import Link from 'next/link';
import Image from 'next/image';

import AccountSettings from '@/components/accountSettings/AccountSettings';

import './Profile.scss';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='container'>
        <aside className='left'>
          <h1 className='profileHeader'>Your profile</h1>
          <div className='menuWrap'>
            <span className='menuItem active'>
              <Link href='/'>
                <Image
                  src='/svg/credit-card.svg'
                  width={25}
                  height={25}
                  alt='cog'
                />
                My orders
              </Link>
            </span>
            <span className='menuItem'>
              <Link href='/'>
                <Image src='/svg/user.svg' width={25} height={25} alt='cog' />
                Personal info
              </Link>
            </span>
            <span className='menuItem'>
              <Link href='/'>
                <Image
                  src='/svg/receipt-percent.svg'
                  width={25}
                  height={25}
                  alt='cog'
                />
                Coupons
              </Link>
            </span>
          </div>
          <hr />
          <div className='menuWrap'>
            <span className='menuItem'>
              <Link href='/'>
                <Image src='/svg/wallet.svg' width={25} height={25} alt='cog' />
                Wallets
              </Link>
            </span>
            <span className='menuItem'>
              <Link href='/'>
                <Image
                  src='/svg/arrows-pointing-out.svg'
                  width={25}
                  height={25}
                  alt='cog'
                />
                Loyalty points
              </Link>
            </span>
            <span className='menuItem'>
              <Link href='/'>
                <Image src='/svg/wifi.svg' width={25} height={25} alt='cog' />
                Referral code
              </Link>
            </span>
            <span className='menuItem'>
              <Link href='/'>
                <Image
                  src='/svg/map-pin.svg'
                  width={25}
                  height={25}
                  alt='cog'
                />
                Your address
              </Link>
            </span>
          </div>
          <hr />
          <div className='menuWrap'>
            <span className='menuItem'>
              <Link href='/'>
                <Image
                  src='/svg/cog-8-tooth.svg'
                  width={25}
                  height={25}
                  alt='cog'
                />
                Settings
              </Link>
            </span>
          </div>
        </aside>
        <AccountSettings />
      </div>
    </div>
  );
};

export default Profile;
