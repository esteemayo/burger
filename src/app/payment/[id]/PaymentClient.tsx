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

interface PaymentClientProps {
  orderId: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentClient = ({ orderId }: PaymentClientProps) => {
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

export default PaymentClient;
