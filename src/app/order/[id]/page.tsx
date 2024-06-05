import type { Metadata } from 'next';

import OrderClient from './OrderClient';

export const metadata: Metadata = {
  title: 'Burger - Order page',
};

const Order = () => {
  return <OrderClient />;
};

export default Order;
