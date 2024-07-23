'use client';

import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from '@stripe/stripe-js';

import { useCartStore } from '@/hooks/useCartStore';
import { makePayment } from '@/services/paymentService';

import CheckoutForm from '@/components/checkoutForm/CheckoutForm';

import './Payment.scss';

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

  useEffect(() => {
    (async () => {
      try {
        const { data } = await makePayment(orderId);

        setClientSecret(data?.clientSecret);
        reset();
      } catch (err: unknown) {
        console.log(err);
      }
    })();
  }, [orderId, reset]);

  const appearance: Appearance = {
    theme: 'stripe',
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className='payment'>
      <div className='container'>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Payment;
