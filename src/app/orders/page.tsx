import type { Metadata } from 'next';

import OrdersClient from './OrdersClient';

export const metadata: Metadata = {
  title: 'Burger. App | Orders',
};

const Orders = () => {
  return <OrdersClient />;
};

export default Orders;
