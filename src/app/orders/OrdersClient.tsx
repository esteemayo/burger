'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import EmptyState from '@/components/emptyState/EmptyState';
import Loader from '@/components/loader/Loader';
import OrderTable from '@/components/orderTable/OrderTable';

import { getOrders } from '@/services/orderService';

import './Orders.scss';

const fetchOrders = async () => {
  const { data } = await getOrders();
  return data;
};

const OrdersClient = () => {
  const { data: session } = useSession();

  const { isLoading, data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetchOrders(),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (orders?.length < 1) {
    return (
      <EmptyState
        url='products'
        title='Empty order(s)'
        subtitle='You have not made any order yet!'
        imgSrc='empty'
        label='Continue shopping'
        showReset
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
