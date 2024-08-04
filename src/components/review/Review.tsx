'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { ReviewProps, UserType } from '@/types';
import { useAvatar } from '@/hooks/useAvatar';
import { getUser } from '@/services/userService';

import StarRating from '../starRating/StarRating';

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

  const { avatar } = useAvatar(user as UserType);

  return (
    <article className='review'>
      <div className='reviewCard'>
        <div className='reviewWrapper'>
          <div className='reviewBox'>
            <div className='reviewImg'>
              <Image src={avatar} width={87} height={87} alt='avatar' />
            </div>
            <div className='reviewer'>
              <div className='reviewerWrap'>
                <div className='reviewerName'>{user?.name}</div>
                <p className='reviewerText'>{desc}</p>
              </div>
            </div>
          </div>
          <div className='reviewRating'>
            <div className='star'>
              <StarRating name='read-only' value={rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
