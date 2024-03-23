import { FaStar } from 'react-icons/fa';

import { ReviewFormProps } from '@/types';

import './ReviewForm.scss';

const ReviewForm = ({ reviews, onSubmit }: ReviewFormProps) => {
  return (
    <div className='reviewForm'>
      <div className='reviewFormWrap'>
        <div className='respond'>
          <span className='replyTitle'>
            {reviews.length > 0
              ? 'Add a review'
              : 'Be the first to review “Double Grilled Chicken Burger”'}
          </span>
          <form onSubmit={onSubmit}>
            <div className='ratingWrap'>
              <span>Your rating</span>
              <div className='formRating'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <textarea
              name='review'
              id='review'
              cols={30}
              rows={10}
              placeholder='Message'
            />
            <div className='inputWrap'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='formControl'
              />
              <input
                type='email'
                name='email'
                placeholder='Email address'
                className='formControl'
              />
            </div>
            <div className='consent'>
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
              <div>
                <input type='checkbox' name='consent' id='consent' />
                <label htmlFor='consent'>Sign me up for the newsletter!</label>
              </div>
            </div>
            <button type='submit'>Submit review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
