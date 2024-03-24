'use client';

import { useCallback, useState } from 'react';

import StarRating from '../starRating/StarRating';

import './ReviewForm.scss';

const initialState = {
  desc: '',
  name: '',
  email: '',
  consent: false,
};

const ReviewForm = () => {
  const [inputs, setInputs] = useState(initialState);
  const [rating, setRating] = useState<number | null>(null);

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = input;

      setInputs((prev) => {
        return { ...prev, [name]: value };
      });
    },
    []
  );

  const handleConsent = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = input;

      setInputs((prev) => {
        return { ...prev, consent: checked };
      });
    },
    []
  );

  const handleClear = useCallback(() => {
    setRating(null);
    setInputs(initialState);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ rating, ...inputs });
      handleClear();
    },
    [handleClear, inputs, rating]
  );

  const { desc, name, email, consent } = inputs;

  return (
    <form className='formReview' onSubmit={handleSubmit}>
      <div className='ratingWrap'>
        <span>Your rating</span>
        <div className='formRating'>
          <StarRating
            name='hover-feedback'
            value={rating!}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
      </div>
      <textarea
        id='desc'
        name='desc'
        cols={30}
        rows={10}
        value={desc}
        placeholder='Message'
        onChange={handleChange}
      />
      <div className='inputWrap'>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          className='formControl'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          value={email}
          placeholder='Email address'
          className='formControl'
          onChange={handleChange}
        />
      </div>
      <div className='consent'>
        <p>
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
        <div>
          <input
            type='checkbox'
            id='consent'
            name='consent'
            checked={consent}
            onChange={handleConsent}
          />
          <label htmlFor='consent'>Sign me up for the newsletter!</label>
        </div>
      </div>
      <button type='submit'>Submit review</button>
    </form>
  );
};

export default ReviewForm;
