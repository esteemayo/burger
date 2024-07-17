'use client';

import { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import StarRating from '../starRating/StarRating';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { validateReviewInputs } from '@/validations/review';
import { ReviewData, ReviewErrors } from '@/types';
import { createReviewOnProduct } from '@/services/productService';

import './ReviewForm.scss';

const initialState: ReviewData = {
  desc: '',
  consent: false,
};

const initialErrorState: ReviewErrors = {
  desc: '',
  rating: '',
};

interface ReviewFormProps {
  productId: string;
}

const ReviewForm = ({ productId }: ReviewFormProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async ({
      data,
      productId,
    }: {
      data: object;
      productId: string;
    }) => {
      const res = await createReviewOnProduct(data, productId);
      console.log(res.data);
      return res.data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });

  const [errors, setErrors] = useState(initialErrorState);
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

      const errors = validateReviewInputs(inputs, rating);
      if (Object.keys(errors).length > 0) return setErrors(errors);

      setErrors(initialErrorState);

      const data = {
        rating,
        ...inputs,
      };

      mutate({ data, productId });
      handleClear();
    },
    [handleClear, inputs, mutate, productId, rating]
  );

  const { desc, consent } = inputs;

  return (
    <form className='formReview' onSubmit={handleSubmit}>
      <div className='ratingWrap'>
        <div className='ratingBox'>
          <span className='ratingLabel'>Your rating</span>
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
        {errors['rating'] && <ErrorMessage message={errors['rating']!} />}
      </div>
      <div>
        <textarea
          id='desc'
          name='desc'
          cols={30}
          rows={10}
          value={desc}
          placeholder='Message'
          onChange={handleChange}
        />
        {errors['desc'] && <ErrorMessage message={errors['desc']!} />}
      </div>
      {/* <div className='inputWrap'>
        <div className='inputBox'>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            className='formControl'
            onChange={handleChange}
          />
          {errors['name'] && <ErrorMessage message={errors['name']!} />}
        </div>
        <div className='inputBox'>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='Email address'
            className='formControl'
            onChange={handleChange}
          />
          {errors['email'] && <ErrorMessage message={errors['email']!} />}
        </div>
      </div> */}
      <div className='consent'>
        <p>
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
        <div className='toggle'>
          <label htmlFor='consent' className='switch'>
            <input
              type='checkbox'
              id='consent'
              name='consent'
              checked={consent}
              onChange={handleConsent}
            />
            <span className='slider round' />
          </label>
          <label htmlFor='consent'>Sign me up for the newsletter!</label>
        </div>
      </div>
      <button type='submit'>Submit review</button>
    </form>
  );
};

export default ReviewForm;
