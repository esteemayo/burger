'use client';

import { useCallback, useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './NewsLetter.scss';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(email);
      setEmail('');
    },
    [email]
  );

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
            <input
              type='email'
              placeholder='Your email address'
              onChange={handleEmail}
            />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
