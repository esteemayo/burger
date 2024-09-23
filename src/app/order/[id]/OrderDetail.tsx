'use client';

import { formatDate } from '@/utils/formatDate';
import { formatCurrency } from '@/utils/formatCurrency';

import { OrderDetailProps } from '@/types';

import './Order.scss';

const OrderDetail = ({ user, order }: OrderDetailProps) => {
  return (
    <div className='orderDetail'>
      <h1 className='orderHeading'>Order Detail</h1>
      <div className='orderContainer'>
        <div className='orderItem'>
          <h3>Order ID</h3>
          <span className='orderId'>#{order?.id}</span>
        </div>
        <div className='orderItem'>
          <h3>Ship Date</h3>
          <time dateTime={order?.createdAt}>
            {formatDate(order?.createdAt)}
          </time>
        </div>
        <div className='orderItem'>
          <h3>Customer</h3>
          <span>{user?.name}</span>
        </div>
        <div className='orderItem'>
          <h3>Shipping To</h3>
          <span>{user?.address}</span>
        </div>
        <div className='orderItem'>
          <h3>Total</h3>
          <span className='orderTotal'>{formatCurrency(order?.price)}</span>
        </div>
        <div className='orderItem'>
          <h3>Delivery Date</h3>
          <time dateTime={order?.updatedAt}>
            {formatDate(order?.updatedAt)}
          </time>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
