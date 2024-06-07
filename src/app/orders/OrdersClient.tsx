'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import EmptyState from '@/components/emptyState/EmptyState';
import OrderTable from '@/components/orderTable/OrderTable';

import { getOrders } from '@/services/orderService';

import './Orders.scss';

const OrdersClient = () => {
  const { data: session } = useSession();

  const { isLoading, data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const { data } = await getOrders();
      return data;
    },
  });

  if (isLoading) {
    return 'Loading...';
  }

  if (orders?.length < 1) {
    return (
      <EmptyState
        title='Empty order(s)'
        subtitle='You have not made any order yet!'
        imgSrc='empty'
      />
    );
  }

  return (
    <div className='orders'>
      <div className='container'>
        <OrderTable isAdmin={session?.user.isAdmin} data={orders} />
      </div>
    </div>
  );
};

export default OrdersClient;
