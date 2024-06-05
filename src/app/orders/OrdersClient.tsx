'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import { getOrders } from '@/services/orderService';
import OrderTable from '@/components/orderTable/OrderTable';

import './Orders.scss';

const OrdersClient = () => {
  const { data: session } = useSession();

  const { data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await getOrders();
      return data;
    },
  });

  console.log(orders)

  return (
    <div className='orders'>
      <div className='container'>
        <OrderTable isAdmin={session?.user.isAdmin} data={orders} />
      </div>
    </div>
  );
};

export default OrdersClient;
