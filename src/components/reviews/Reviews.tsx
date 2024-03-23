'use client';

import { useCallback } from 'react';

import Review from '../review/Review';
import ReviewForm from '../reviewForm/ReviewForm';

import './Reviews.scss';

const Reviews = () => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const reviews = [];

  return (
    <div className='reviews'>
      <div className='reviewBox'>
        <ul className='listWrap'>
          <li className='listItem active'>Reviews (0)</li>
        </ul>
        <div className='reviewWrap'>
          <div className='reviewContainer'>
            {reviews.length < 1 ? (
              <div className='allReviews'>
                <p>There are no reviews yet.</p>
              </div>
            ) : (
              <Review />
            )}
            <div className='reviewFormWrap'>
              <div className='reviewForm'>
                <div className='respond'>
                  <span className='replyTitle'>
                    {reviews.length > 0
                      ? 'Add a review'
                      : 'Be the first to review “Double Grilled Chicken Burger”'}
                  </span>
                  <ReviewForm onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
