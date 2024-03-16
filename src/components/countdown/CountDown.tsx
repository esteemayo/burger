'use client';

import Countdown from 'react-countdown';

import './CountDown.scss';

const CountDown = () => {
  const endDate = new Date('2024-12-31');

  return <Countdown date={endDate} className='countdown' />;
};

export default CountDown;
