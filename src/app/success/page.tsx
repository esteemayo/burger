import type { Metadata } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';

import SuccessClient from './SuccessClient';

import './Success.scss';

export const metadata: Metadata = {
  title: 'Burger | Success',
};

const Success = () => {
  const router = useRouter();
  const params = useSearchParams();

  const payment_intent = params.get('payment_intent');

  console.log(payment_intent);

  return (
    <div className='success'>
      <div className='container'>
        <SuccessClient paymentIntent={payment_intent} />
      </div>
    </div>
  );
};

export default Success;
