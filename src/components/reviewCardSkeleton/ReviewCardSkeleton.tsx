import Skeleton from 'react-loading-skeleton';

import './ReviewCardSkeleton.scss';

const ReviewCardSkeleton = () => {
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
            <Skeleton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCardSkeleton;
