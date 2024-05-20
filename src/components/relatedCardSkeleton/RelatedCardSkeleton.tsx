'use client';

import Skeleton from 'react-loading-skeleton';
import { useCallback, useEffect, useState } from 'react';

import './RelatedCardSkeleton.scss';

const RelatedCardSkeleton = () => {
  const [dimension, setDimension] = useState(window.innerWidth);

  const handleScreenSize = useCallback(() => {
    setDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleScreenSize);
    return () => window.removeEventListener('resize', handleScreenSize);
  }, [handleScreenSize]);

  return (
    <article className='relatedCardSkeleton'>
      <div className='relatedCardBox'>
        <Skeleton width={220} height={170} />
      </div>
      <div className='relatedCardContent'>
        <Skeleton count={1.5} />
      </div>
    </article>
  );
};

export default RelatedCardSkeleton;
