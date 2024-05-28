import Image from 'next/image';

interface HeartIconProps {
  isFavorite: boolean;
}

const HeartIcon = ({ isFavorite }: HeartIconProps) => {
  return isFavorite ? (
    <Image src='/svg/heart.svg' width={20} height={20} alt='heart icon' />
  ) : (
    <Image src='/svg/heart-1.svg' width={20} height={20} alt='heart icon' />
  );
};

export default HeartIcon;
