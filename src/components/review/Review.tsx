'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { ReviewProps } from '@/types';
import StarRating from '../starRating/StarRating';

import { getUser } from '@/services/userService';

import './Review.scss';

const Review = ({ desc, rating, userId }: ReviewProps) => {
  const { data: user } = useQuery({
    queryKey: [`${userId}`],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
  });

  return (
    <article className='review'>
      <div className='reviewCard'>
        <div className='reviewWrapper'>
          <div className='reviewImg'>
            <Image
              src={user?.image ?? '/svg/male-avatar.svg'}
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
              <div className='reviewerName'>{user?.name}</div>
              <p className='reviewerText'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
