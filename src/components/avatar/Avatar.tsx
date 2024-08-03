import Image from 'next/image';

import './Avatar.scss';

interface AvatarProps {
  imgSrc: string;
}

const Avatar = ({ imgSrc }: AvatarProps) => {
  return (
    <Image
      src={imgSrc}
      width={30}
      height={30}
      alt='avatar'
      className='avatar'
    />
  );
};

export default Avatar;
