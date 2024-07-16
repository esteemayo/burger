import Image from 'next/image';

import { ReviewProps } from '@/types';
import StarRating from '../starRating/StarRating';

import './Review.scss';

const Review = ({ desc, rating, userId }: ReviewProps) => {
  return (
    <article className='review'>
      <div className='reviewCard'>
        <div className='reviewWrapper'>
          <div className='reviewImg'>
            <Image
              src={'/svg/male-avatar.svg'}
              width={87}
              height={87}
              alt='avatar'
            />
          </div>
          <div className='reviewRating'>
            <div className='star'>
              <StarRating name='read-only' value={rating} readOnly />
            </div>
          </div>
          <div className='reviewer'>
            <div className='reviewerWrap'>
              <div className='reviewerName'>{userId}</div>
              <p className='reviewerText'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
