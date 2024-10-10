'use client';

import { useCallback, useState } from 'react';

import Spinner from '../spinner/Spinner';
import CountDown from '../countdown/CountDown';

import './OfferInfo.scss';

const OfferInfo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='orderInfo'>
      <h1 className='heading'>Double crunchy chicken burger</h1>
      <p className='desc'>
        Our Double crunchy chicken burger are ultra crispy and absolutely
        bursting with flavour topped with fresh lettuce, cucumbers, Onions, our
        special sauce and cheese! Its an absolute crowd pleaser.
      </p>
      <CountDown />
      <button type='button' disabled={!!isLoading} onClick={handleClick}>
        {!!isLoading ? <Spinner /> : 'Order now'}
      </button>
    </div>
  );
};

export default OfferInfo;
