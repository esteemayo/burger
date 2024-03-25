import Image from 'next/image';

import './AccountInfo.scss';

const AccountInfo = () => {
  return (
    <div className='accountInfo'>
      <article className='accountCard'>
        <div className='left'>
          <h2>461</h2>
          <span>Days Since Joining</span>
        </div>
        <div className='right'>
          <Image src='/svg/male-avatar.svg' width={25} height={25} alt='' />
        </div>
      </article>
      <article className='accountCard'>
        <div className='left'>
          <h2>$0.00</h2>
          <span>Amount in Wallet</span>
        </div>
        <div className='right'>
          <Image src='/svg/male-avatar.svg' width={25} height={25} alt='' />
        </div>
      </article>
      <article className='accountCard'>
        <div className='left'>
          <h2>12</h2>
          <span>Orders</span>
        </div>
        <div className='right'>
          <Image src='/svg/male-avatar.svg' width={25} height={25} alt='' />
        </div>
      </article>
      <article className='accountCard'>
        <div className='left'>
          <h2>157</h2>
          <span>Loyalty Points</span>
        </div>
        <div className='right'>
          <Image src='/svg/male-avatar.svg' width={25} height={25} alt='' />
        </div>
      </article>
    </div>
  );
};

export default AccountInfo;
