'use client';

import { useCallback, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Spinner from '../spinner/Spinner';

import './NewsLetter.scss';

const NewsLetter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback((_e: React.MouseEvent<HTMLDivElement>) => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const email = input.value;

    if (email) {
      setIsLoading(true);

      setTimeout(() => {
        console.log(email);

        toast.success('Subscribed to our newsletter!');
        form.reset();

        setIsLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <section className='newsLetter'>
      <div className='container'>
        <div className='textWrap'>
          <div className='headingWrap' onClick={handleClick}>
            <EmailOutlinedIcon />
            <h5>Subscribe to special offers</h5>
          </div>
        </div>
        <div className='formWrap'>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type='email'
              placeholder='Your email address'
            />
            <button type='submit' disabled={isLoading}>
              {isLoading ? <Spinner color='#a00c1a' /> : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
