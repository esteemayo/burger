import type { Metadata } from 'next';

import OrdersClient from './OrdersClient';

export const metadata: Metadata = {
  title: 'Burger - Orders page',
};

const Orders = () => {
  return <OrdersClient />;
};

export default Orders;
