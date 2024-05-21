'use client';

import { useCallback, useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';

import './ReviewCardSkeleton.scss';

const ReviewCardSkeleton = () => {
  const [dimension, setDimension] = useState(window.innerWidth);

  const handleScreenSize = useCallback(() => {
    setDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize);
    return () => window.removeEventListener('resize', handleScreenSize);
  }, [handleScreenSize]);

  let width;
  let height;

  if (dimension <= 300) {
    width = 32;
    height = 32;
  } else if (dimension <= 429) {
    width = 50;
    height = 50;
  } else if (dimension <= 600) {
    width = 70;
    height = 70;
  } else if (dimension >= 1800) {
    width = 120;
    height = 120;
  } else {
    width = 87;
    height = 87;
  }

  return (
    <article className='reviewCardSkeleton'>
      <div className='reviewCardWrap'>
        <div className='reviewCardBox'>
          <Skeleton circle width={width} height={height} />
          <div className='reviewCardRating'>
            <Skeleton width={75} height={15} />
          </div>
          <div className='reviewCardUser'>
            <Skeleton width={165} />
            <Skeleton count={2} width={600} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCardSkeleton;
