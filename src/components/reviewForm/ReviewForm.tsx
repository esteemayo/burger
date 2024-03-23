import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { ReviewFormProps } from '@/types';

import './ReviewForm.scss';

const ReviewForm = ({ value, onChangeRating, onSubmit }: ReviewFormProps) => {
  return (
    <form className='formReview' onSubmit={onSubmit}>
      <div className='ratingWrap'>
        <span>Your rating</span>
        <div className='formRating'>
          <Rating
            name='hover-feedback'
            value={value}
            onChange={(event, newValue) => {
              onChangeRating(event, newValue);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
            }
          />
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
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
        <div>
          <input type='checkbox' name='consent' id='consent' />
          <label htmlFor='consent'>Sign me up for the newsletter!</label>
        </div>
      </div>
      <button type='submit'>Submit review</button>
    </form>
  );
};

export default ReviewForm;
