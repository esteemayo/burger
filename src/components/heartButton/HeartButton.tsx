import Image from 'next/image';

import './HeartButton.scss';

const HeartButton = () => {
  return (
    <span className='heartWrap'>
      <Image src='/svg/heart-1.svg' width={20} height={20} alt='heart icon' />
    </span>
  );
};

export default HeartButton;
