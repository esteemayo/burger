'use client';

import Skeleton from 'react-loading-skeleton';
import { useCallback, useEffect, useState } from 'react';

import './ProductCardSkeleton.scss';

const ProductCardSkeleton = () => {
  const [dimension, setDimension] = useState(window.innerWidth);

  const handleScreenWidth = useCallback(() => {
    setDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [handleScreenWidth]);

  let width;
  let height;

  if (dimension <= 768) {
    width = 170;
    height = 150;
  } else if (dimension <= 583) {
    width = 230;
  } else if (dimension <= 560) {
    width = 180;
  } else if (dimension <= 480) {
    width = 300;
    height = 270;
  } else if (dimension <= 430) {
    width = 350;
    height = 230;
  } else if (dimension <= 300) {
    width = 280;
    height = 200;
  } else if (dimension >= 1800) {
    width = 420;
    height = 324;
  } else {
    width = 300;
    height = 270;
  }

  return (
    <article className='productCardSkeleton'>
      <div className='skeletonImgWrap'>
        <Skeleton width={width} height={height} />
      </div>
      <div className='skeletonFooter'>
        <Skeleton count={1.5} />
      </div>
    </article>
  );
};

export default ProductCardSkeleton;
