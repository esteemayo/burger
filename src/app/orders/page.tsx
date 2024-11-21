import type { Metadata } from 'next';

import OrdersClient from './OrdersClient';

export const metadata: Metadata = {
  title: 'Burgers. App | Orders',
};

const Orders = () => {
  return <OrdersClient />;
};

export default Orders;
