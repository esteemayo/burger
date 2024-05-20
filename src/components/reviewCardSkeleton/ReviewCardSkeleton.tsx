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

  return (
    <article className='reviewCardSkeleton'>
      <div className='reviewCardWrap'>
        <div className='reviewCardBox'>
          <Skeleton circle width={87} height={87} />
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
