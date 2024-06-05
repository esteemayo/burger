'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  LinkAuthenticationElement,
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      setIsLoading(true);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: 'http://localhost:3000/success',
        },
      });

      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message || 'Something went wrong!');
      } else {
        setMessage('An unexpected error occurred.');
      }

      setIsLoading(false);
    },
    [elements, stripe]
  );

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <form onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id='link-authentication-element'
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id='payment-element' options={paymentElementOptions} />
      <button id='submit' disabled={isLoading || !stripe || !elements}>
        <span id='button-text'>
          Pay now
        </span>
      </button>
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
};

export default CheckoutForm;
