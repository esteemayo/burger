import Image from 'next/image';

import './Avatar.scss';

interface AvatarProps {
  imgSrc: string;
  desc?: string;
}

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
