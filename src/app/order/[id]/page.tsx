import type { Metadata } from 'next';

import OrderClient from './OrderClient';

export const metadata: Metadata = {
  title: 'Burger. | Order',
};

interface IParams {
  params: {
    id: string;
  };
}

const Order = ({ params }: IParams) => {
  const { id } = params;

  return <OrderClient orderId={id} />;
};

export default Order;
