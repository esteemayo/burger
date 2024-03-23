import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { ReviewProps } from '@/types';

import './Review.scss';

const Review = ({ desc, rating, user }: ReviewProps) => {
  return (
    <article className='review'>
      <div className='reviewCard'>
        <div className='reviewWrapper'>
          <div className='reviewImg'>
            <Image
              src={user.image ?? '/svg/male-avatar.svg'}
              width={87}
              height={87}
              alt='avatar'
            />
          </div>
          <div className='reviewRating'>
            <div className='star'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className='reviewer'>
            <div className='reviewerWrap'>
              <div className='reviewerName'>{user.name}</div>
              <p className='reviewerText'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
