'use client';

import { useQuery } from '@tanstack/react-query';

import OrderDetail from './OrderDetail';
import OrderStatus from './OrderStatus';

import Loader from '@/components/loader/Loader';
import EmptyState from '@/components/emptyState/EmptyState';

import { getOrder } from '@/services/orderService';

import './Order.scss';
import { getUser } from '@/services/userService';

interface OrderClientProps {
  orderId: string;
}

const OrderClient = ({ orderId }: OrderClientProps) => {
  const { isLoading, data: order } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const { data } = await getOrder(orderId);
      return data;
    },
    enabled: !!orderId,
  });

  const userId = order?.userId;

  const { isLoading: isFetching, data: user } = useQuery({
    queryKey: [`${userId}`],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!order) {
    return (
      <EmptyState
        title='Order not found'
        subtitle='There is no order with the ID!'
        imgSrc='empty'
      />
    );
  }

  return (
    <div className='order'>
      <div className='container'>
        <div className='orderBox'>
          <OrderDetail order={order} user={user} />
          <hr />
          <OrderStatus createdAt={order?.createdAt} status={order?.status} />
        </div>
      </div>
    </div>
  );
};

export default OrderClient;
