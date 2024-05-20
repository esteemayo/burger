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

  let width;
  let height;

  if (dimension <= 300) {
    width = 240;
    height = 136;
  } else if (dimension <= 319) {
    width = 272;
    height = 160;
  } else if (dimension <= 335) {
    width = 128;
    height = 80;
  } else if (dimension <= 359) {
    width = 136;
    height = 80;
  } else if (dimension <= 400) {
    width = 144;
    height = 112;
  } else if (dimension <= 439) {
    width = 160;
    height = 112;
  } else if (dimension <= 455) {
    width = 188;
    height = 136;
  } else if (dimension <= 471) {
    width = 196;
    height = 136;
  } else if (dimension <= 480) {
    width = 200;
    height = 136;
  } else if (dimension <= 555) {
    width = 104;
    height = 88;
  } else if (dimension <= 563) {
    width = 112;
    height = 104;
  } else if (dimension <= 595) {
    width = 120;
    height = 104;
  } else if (dimension <= 600) {
    width = 128;
    height = 104;
  } else if (dimension <= 751) {
    width = 144;
    height = 136;
  } else if (dimension <= 768) {
    width = 152;
    height = 136;
  } else if (dimension <= 900) {
    width = 176;
    height = 136;
  } else if (dimension <= 1200) {
    width = 198;
    height = 153;
  } else if (dimension >= 1800) {
    width = 324;
    height = 240;
  } else {
    width = 220;
    height = 170;
  }

  return (
    <article className='relatedCardSkeleton'>
      <div className='relatedCardBox'>
        <Skeleton width={width} height={height} />
      </div>
      <div className='relatedCardContent'>
        <Skeleton count={1.5} />
      </div>
    </article>
  );
};

export default RelatedCardSkeleton;
