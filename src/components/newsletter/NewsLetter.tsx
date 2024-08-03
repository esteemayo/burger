'use client';

import { toast } from 'react-toastify';
import { useCallback } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './NewsLetter.scss';

const NewsLetter = () => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const email = input.value;

    console.log(email);

    toast.success('Successfully subscribed to our newsletter');
    form.reset();
  }, []);

  return (
    <section className='newsLetter'>
      <div className='container'>
        <div className='textWrap'>
          <div className='headingWrap'>
            <EmailOutlinedIcon />
            <h5>Subscribe to special offers</h5>
          </div>
        </div>
        <div className='formWrap'>
          <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Your email address' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
