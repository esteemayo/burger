'use client';

import { useSession } from 'next-auth/react';

import { orders } from '@/data';
import OrderTable from '@/components/orderTable/OrderTable';

import './Orders.scss';

const OrdersClient = () => {
  const { data: session } = useSession();

  return (
    <div className='orders'>
      <div className='container'>
        <OrderTable isAdmin={session?.user.isAdmin} data={orders} />
      </div>
    </div>
  );
};

export default OrdersClient;
