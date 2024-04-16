import Skeleton from 'react-loading-skeleton';

import './RelatedCardSkeleton.scss';

const RelatedCardSkeleton = () => {
  return (
    <article className='relatedCardSkeleton'>
      <div className='relatedCardBox'>
        <Skeleton width={220} height={170} />
      </div>
      <div className='relatedCardContent'>
        <Skeleton count={2} />
      </div>
    </article>
  );
};

export default RelatedCardSkeleton;
