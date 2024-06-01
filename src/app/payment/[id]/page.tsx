'use client';

import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '@/components/checkoutForm/CheckoutForm';

import './Payment.scss';
import { makePayment } from '@/services/paymentService';
import { useCartStore } from '@/hooks/useCartStore';

interface IParams {
  params: {
    id: string;
  };
}

const stripePromise = loadStripe(
  'pk_test_51PMC1YLjKbhA4Yjg89VxYW1rFYaqbOZ3TQqbc4AtBY0PMnQzwJAad7eOBO1HWFbSgrHY1E0MpqQvx94jrZhvx2Bq00jwNTSLcT'
);

const Payment = ({ params }: IParams) => {
  const { id: orderId } = params;

  const reset = useCartStore((store) => store.reset);
  const [clientSecret, setClientSecret] = useState('');

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  useEffect(() => {
    (async () => {
      const { data } = await makePayment(orderId);
      setClientSecret(data.clentSecret);
      reset();
      try {
      } catch (err: unknown) {
        console.log(err);
      }
    })();
  }, [orderId, reset]);

  return (
    <div className='payment'>
      <div className='container'>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
