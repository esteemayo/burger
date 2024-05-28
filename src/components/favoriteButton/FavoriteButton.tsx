import Image from 'next/image';

import './FavoriteButton.scss';

const FavoriteButton = () => {
  return (
    <span className='heartWrap'>
      <Image src='/svg/heart-1.svg' width={20} height={20} alt='heart icon' />
    </span>
  );
};

export default FavoriteButton;
