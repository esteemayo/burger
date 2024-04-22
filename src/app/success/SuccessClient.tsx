'use client';

import ConfettiExplosion from 'react-confetti-explosion';
import { useCallback, useEffect, useState } from 'react';

import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import './Success.scss';

const SuccessClient = () => {
  const [isExploding, setIsExploding] = useState(true);
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSize = useCallback(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, [handleSize]);

  useEffect(() => {
    setTimeout(() => {
      setIsExploding(false);
    }, 5000);
  }, []);

  return (
    <div className='wrapper'>
      {isExploding && (
        <ConfettiExplosion
          width={dimension.width}
          height={dimension.height}
          force={0.8}
          duration={3000}
          particleCount={250}
        />
      )}
      <SuccessInfo />
      <SuccessDetails />
    </div>
  );
};

export default SuccessClient;
