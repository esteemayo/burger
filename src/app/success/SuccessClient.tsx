'use client';

import ConfettiExplosion from 'react-confetti-explosion';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import { updatePaymentIntent } from '@/services/orderService';

import './Success.scss';

interface SuccessClientProps {
  paymentIntent: string | null;
}

const SuccessClient = ({ paymentIntent }: SuccessClientProps) => {
  const router = useRouter();

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
    (async () => {
      try {
        await updatePaymentIntent(paymentIntent);

        setTimeout(() => {
          router.push('/orders');
        }, 5000);
      } catch (err: unknown) {
        console.log(err);
      }
    })();
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
