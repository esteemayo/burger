import Link from 'next/link';
import Image from 'next/image';

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
            <hr />
            <Link href='/'>Wallets</Link>
            <Link href='/'>Loyalty points</Link>
            <Link href='/'>Referral code</Link>
            <Link href='/'>Your address</Link>
            <hr />
            <Link href='/'>Settings</Link>
          </div>
        </aside>
        <section className='right'>
          <div className='accountInfo'>
            <article className='accountCard'>
              <div className='left'>
                <h2>461</h2>
                <span>Days Since Joining</span>
              </div>
              <div className='right'>
                <Image
                  src='/svg/male-avatar.svg'
                  width={25}
                  height={25}
                  alt=''
                />
              </div>
            </article>
            <article className='accountCard'>
              <div className='left'>
                <h2>$0.00</h2>
                <span>Amount in Wallet</span>
              </div>
              <div className='right'>
                <Image
                  src='/svg/male-avatar.svg'
                  width={25}
                  height={25}
                  alt=''
                />
              </div>
            </article>
            <article className='accountCard'>
              <div className='left'>
                <h2>12</h2>
                <span>Orders</span>
              </div>
              <div className='right'>
                <Image
                  src='/svg/male-avatar.svg'
                  width={25}
                  height={25}
                  alt=''
                />
              </div>
            </article>
            <article className='accountCard'>
              <div className='left'>
                <h2>157</h2>
                <span>Loyalty Points</span>
              </div>
              <div className='right'>
                <Image
                  src='/svg/male-avatar.svg'
                  width={25}
                  height={25}
                  alt=''
                />
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
