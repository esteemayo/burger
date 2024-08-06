'use client';

import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ClipLoader } from 'react-spinners';

import './NewsLetter.scss';

const NewsLetter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const email = input.value;

    setIsLoading(true);

    setTimeout(() => {
      console.log(email);

      toast.success('Subscribed to our newsletter!');
      form.reset();

      setIsLoading(false);
    }, 1000);
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
            <button type='submit'>
              {isLoading ? (
                <ClipLoader size={20} color='#a00c1a' />
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
