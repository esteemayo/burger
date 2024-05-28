'use client';

import { HeartButtonProps } from '@/types';
import useFavorite from '@/hooks/useFavorite';

import HeartIcon from '../heartIcon/HeartIcon';

import './HeartButton.scss';

const HeartButton = ({ actionId, likes, currentUser }: HeartButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite(
    actionId,
    currentUser,
    likes
  );

  return (
    <span className='heartWrap' onClick={toggleFavorite}>
      <HeartIcon isFavorite={hasFavorited} />
    </span>
  );
};

export default HeartButton;
