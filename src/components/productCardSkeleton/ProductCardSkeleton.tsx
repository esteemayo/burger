import Skeleton from 'react-loading-skeleton';

import './ProductCardSkeleton.scss';

const ProductCardSkeleton = () => {
  return (
    <article className='productCardSkeleton'>
      <div className='skeletonImgWrap'>
        <Skeleton width={300} height={270} />
      </div>
      <div className='skeletonFooter'>
        <Skeleton count={2} />
      </div>
    </article>
  );
};

export default ProductCardSkeleton;
