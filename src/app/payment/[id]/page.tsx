import type { Metadata } from 'next';

import PaymentClient from '@/app/payment/[id]/PaymentClient';

export const metadata: Metadata = {
  title: 'Burger. | Payment',
};

interface IParams {
  params: {
    id: string;
  };
}

const Payment = ({ params }: IParams) => {
  const { id: orderId } = params;

  return <PaymentClient orderId={orderId} />;
};

export default Payment;
