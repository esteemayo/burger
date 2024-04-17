import Skeleton from 'react-loading-skeleton';

import './ReviewCardSkeleton.scss';

const ReviewCardSkeleton = () => {
  return (
    <article className='reviewCardSkeleton'>
      <div className='reviewCardWrap'>
        <div className='reviewCardBox'>
          <Skeleton />
          <div className='reviewCardRating'>
            <Skeleton width={75} height={15} />
          </div>
          <div className='reviewCardUser'>
            <Skeleton width={165} height={27} />
            <Skeleton />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCardSkeleton;
