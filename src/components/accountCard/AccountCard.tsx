import Image from 'next/image';

import './AccountCard.scss';

const AccountCard = () => {
  return (
    <article className='accountCard'>
      <div className='statsWrap'>
        <h2>461</h2>
        <span>Days Since Joining</span>
      </div>
      <div className='accountIconWrap'>
        <Image src='/svg/male-avatar.svg' width={25} height={25} alt='' />
      </div>
    </article>
  );
};

export default AccountCard;
