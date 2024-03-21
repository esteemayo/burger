'use client';

import { useCallback } from 'react';
import { FaStar } from 'react-icons/fa';

import './Reviews.scss';

const Reviews = () => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div className='reviews'>
      <div className='reviewBox'>
        <ul className='listWrap'>
          <li className='listItem active'>Reviews (0)</li>
        </ul>
        <div className='reviewWrap'>
          <div className='reviewContainer'>
            <div className='allReviews'>
              <p>There are no reviews yet.</p>
            </div>
            <div className='reviewFormWrap'>
              <div className='reviewForm'>
                <div className='respond'>
                  <span className='replyTitle'>
                    Be the first to review “Double Grilled Chicken Burger”
                  </span>
                  <form onSubmit={handleSubmit}>
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
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </p>
                      <div>
                        <input type='checkbox' name='consent' id='consent' />
                        <label htmlFor='consent'>
                          Sign me up for the newsletter!
                        </label>
                      </div>
                    </div>
                    <button type='submit'>Submit review</button>
                  </form>
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
