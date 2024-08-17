'use client';

import { HeartButtonProps } from '@/types';
import useFavorite from '@/hooks/useFavorite';

import HeartIcon from '../heartIcon/HeartIcon';

import './HeartButton.scss';

const HeartButton = ({
  actionId,
  likes,
  currentUser,
  onLike,
  onUpdate,
  onRefetch,
}: HeartButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite(
    actionId,
    currentUser,
    likes,
    onLike,
    onUpdate,
    onRefetch
  );

  return (
    <span className='heartWrap' onClick={toggleFavorite}>
      <HeartIcon isFavorite={hasFavorited} />
    </span>
  );
};

export default HeartButton;
