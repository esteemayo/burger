import Image from 'next/image';

import { AvatarProps } from '@/types';

import './Avatar.scss';

const Avatar = ({ imgSrc, desc = 'avatar' }: AvatarProps) => {
  return (
    <Image
      src={imgSrc}
      width={30}
      height={30}
      alt={desc}
      className='avatar'
    />
  );
};

export default Avatar;
