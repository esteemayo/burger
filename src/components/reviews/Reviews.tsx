'use client';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ReviewForm from '../reviewForm/ReviewForm';
import Review from '../review/Review';
import ReviewCardSkeleton from '../reviewCardSkeleton/ReviewCardSkeleton';

import { reviews } from '@/data';
import { useCartStore } from '@/hooks/useCartStore';

import './Reviews.scss';

const Reviews = () => {
  const products = useCartStore((store) => store.products);

  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleOpen = useCallback((_e: React.MouseEvent<HTMLSpanElement>) => {
    setIsOpen((value) => !value);
  }, []);

  const reviewsContainer = useMemo(() => {
    return products?.length < 1 ? 'reviews emptyReviews' : 'reviews';
  }, [products?.length]);

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className={reviewsContainer}>
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
                {isLoading
                  ? reviews.map((item) => {
                      return <ReviewCardSkeleton key={item.id} />;
                    })
                  : reviews.map((review) => {
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
