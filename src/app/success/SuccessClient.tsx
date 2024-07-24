'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import { getOrderByIntent } from '@/services/orderService';
import { updatePaymentIntent } from '@/services/paymentService';

import './Success.scss';

const SuccessClient = () => {
  const router = useRouter();
  const params = useSearchParams();

  const payment_intent = params.get('payment_intent');

  const { data: order } = useQuery({
    queryKey: [`${payment_intent}`],
    queryFn: async () => {
      const { data } = await getOrderByIntent(payment_intent);
      return data;
    },
    enabled: !!payment_intent,
  });

  console.log(order);

  useEffect(() => {
    (async () => {
      try {
        await updatePaymentIntent(payment_intent);

        setTimeout(() => {
          router.push('/orders');
        }, 5000);
      } catch (err: unknown) {
        console.log(err);
      }
    })();
  }, [payment_intent, router]);

  return (
    <div className='wrapper'>
      <SuccessInfo />
      <SuccessDetails />
    </div>
  );
};

export default SuccessClient;
