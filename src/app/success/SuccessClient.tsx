'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import { updatePaymentIntent } from '@/services/orderService';

import './Success.scss';

interface SuccessClientProps {
  paymentIntent: string | null;
}

const SuccessClient = ({ paymentIntent }: SuccessClientProps) => {
  const router = useRouter();

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

  return (
    <div className='wrapper'>
      <SuccessInfo />
      <SuccessDetails />
    </div>
  );
};

export default SuccessClient;
