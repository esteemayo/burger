'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { formatDate } from '@/utils/formatDate';
import { excerpts } from '@/utils';
import { formatCurrency } from '@/utils/formatCurrency';

import { OrderDetailProps } from '@/types';
import { getUser } from '@/services/userService';

import './Order.scss';

const OrderDetail = ({ order }: OrderDetailProps) => {
  const userId = order?.userId;

  const { isLoading, data: user } = useQuery({
    queryKey: [`${userId}`],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
  });

  const userLabel = useMemo(() => {
    return isLoading ? 'loading...' : excerpts(user?.name, 10);
  }, [isLoading, user]);

  if (isLoading) {
    return;
  }

  return (
    <div className='orderDetail'>
      <h1 className='orderHeading'>Order Detail</h1>
      <div className='orderContainer'>
        <div className='orderItem'>
          <h3>Order ID</h3>
          <span className='orderId'>#{excerpts(order?.id, 7)}</span>
        </div>
        <div className='orderItem'>
          <h3>Ship Date</h3>
          <time dateTime={order.createdAt}>{formatDate(order?.createdAt)}</time>
        </div>
        <div className='orderItem'>
          <h3>Customer</h3>
          <span>{userLabel}</span>
        </div>
        <div className='orderItem'>
          <h3>Shipping To</h3>
          <span>{excerpts(user?.address ?? user?.street, 15)}</span>
        </div>
        <div className='orderItem'>
          <h3>Total</h3>
          <span className='orderTotal'>{formatCurrency(order?.price)}</span>
        </div>
        <div className='orderItem'>
          <h3>Delivery Date</h3>
          <time dateTime={order?.createdAt}>
            {formatDate(order?.createdAt)}
          </time>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
