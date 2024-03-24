'use client';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCallback, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Review from '../review/Review';
import ReviewForm from '../reviewForm/ReviewForm';

import { reviews } from '@/data';

import './Reviews.scss';

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback((_e: React.MouseEvent<HTMLSpanElement>) => {
    setIsOpen((value) => !value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div className='reviews'>
      <div className='reviewBox'>
        <ul className='listWrap'>
          <li className='listItem active'>
            Reviews ({reviews.length})
            <span className='toggleIcon' onClick={toggleOpen}>
              {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </li>
        </ul>
        <div className='reviewWrap'>
          <div className='reviewContainer'>
            {reviews.length < 1 ? (
              <div className='allReviews'>
                <p>There are no reviews yet.</p>
              </div>
            ) : (
              <>
                {reviews.map((review) => {
                  return <Review key={review.id} {...review} />;
                })}
              </>
            )}
            <div className='reviewFormWrap'>
              <div className='reviewForm'>
                <div className='respond'>
                  <span className='replyTitle'>
                    {reviews.length > 0
                      ? 'Add a review'
                      : 'Be the first to review “Double Grilled Chicken Burger”'}
                  </span>
                  <ReviewForm
                    rating={0}
                    onChangeRating={() => console.log('value')}
                    onSubmit={handleSubmit}
                  />
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
