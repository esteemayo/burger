'use client';

import { useQuery } from '@tanstack/react-query';

import OrderDetail from './OrderDetail';
import OrderStatus from './OrderStatus';

import Loader from '@/components/loader/Loader';
import EmptyState from '@/components/emptyState/EmptyState';

import { getUser } from '@/services/userService';
import { getOrder } from '@/services/orderService';

import './Order.scss';

interface OrderClientProps {
  orderId: string;
}

const fetchOrder = async (orderId: string) => {
  const { data } = await getOrder(orderId);
  return data;
};

const fetchUser = async (userId: string) => {
  const { data } = await getUser(userId);
  return data;
};

const OrderClient = ({ orderId }: OrderClientProps) => {
  const { isLoading, data: order } = useQuery({
    queryKey: ['order'],
    queryFn: () => fetchOrder(orderId),
    enabled: !!orderId,
  });

  const userId = order?.userId;

  const { isLoading: isFetching, data: user } = useQuery({
    queryKey: [`${userId}`],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });

  if (isLoading || isFetching) {
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
          <OrderDetail user={user} order={order} />
          <hr />
          <OrderStatus createdAt={order?.createdAt} status={order?.status} />
        </div>
      </div>
    </div>
  );
};

export default OrderClient;
