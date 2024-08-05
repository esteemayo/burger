'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

import { useAvatar } from '@/hooks/useAvatar';
import { getUser } from '@/services/userService';

import { excerpts } from '@/utils';
import { ReviewProps, UserType } from '@/types';

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

  const [readMore, setReadMore] = useState(false);

  const handleToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setReadMore((value) => {
        return !value;
      });
    }, 
    []
  );

  const review = useMemo(() => {
    return readMore && !!desc.length > 150 ?  desc : excerpts(desc, 150);
  }, [desc, readMore]);

  const btnClasses = useMemo(() => {
    return !!desc.length > 150 ? 'btnReadmore show' : 'btnReadmore hide';
  }, [desc.length]);

  const btnLabel = useMemo(() => {
    return `Read ${readMore ? 'Less' : 'More'}`;
  }, [readMore]);

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
                <p className='reviewerText'>
                  {review}
                  <button type='button' className={btnClasses} onClick={handleToggle}>
                    {btnLabel}
                  </button>
                </p>
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
