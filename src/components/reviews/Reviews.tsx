'use client';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCallback, useMemo, useState } from 'react';
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

  const reviewClasses = useMemo(() => {
    return !isOpen ? 'reviewWrap hide' : 'reviewWrap';
  }, [isOpen]);

  const toggleClasses = useMemo(() => {
    return isOpen ? 'collapse show' : 'collapse';
  }, [isOpen]);

  const reviewLabel = useMemo(() => {
    return reviews.length > 0
      ? 'Add a review'
      : 'Be the first to review “Double Grilled Chicken Burger”';
  }, []);

  return (
    <div className='reviews'>
      <div className='reviewBox'>
        <ul className='listWrap'>
          <li className='listItem active'>
            Reviews ({reviews.length})
            {reviews.length > 0 && (
              <span className='toggleIcon' onClick={toggleOpen}>
                {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </span>
            )}
          </li>
        </ul>
        <div className={reviewClasses}>
          <div className='reviewContainer'>
            {reviews.length < 1 ? (
              <div className='allReviews'>
                <p>There are no reviews yet.</p>
              </div>
            ) : (
              <div className={toggleClasses}>
                {reviews.map((review) => {
                  return <Review key={review.id} {...review} />;
                })}
              </div>
            )}
            <div className='reviewFormWrap'>
              <div className='reviewForm'>
                <div className='respond'>
                  <span className='replyTitle'>{reviewLabel}</span>
                  <ReviewForm />
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
