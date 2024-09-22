'use client';

import { useMemo } from 'react';

import { useStatus } from '@/hooks/useStatus';
import { OrderStatusProps } from '@/types';
import { formatTime } from '@/utils/formatTime';

import './Order.scss';

const OrderStatus = ({ createdAt, status }: OrderStatusProps) => {
  const { statusClass } = useStatus(status);

  const startTime = useMemo(() => {
    return formatTime(createdAt);
  }, [createdAt]);

  const endTime = useMemo(() => {
    const date = new Date(createdAt);
    date.setMinutes(date.getMinutes() + 30);

    return formatTime(date);
  }, [createdAt]);

  const deliveryTime = useMemo(() => {
    return `${status === 'delivered' ? 'Delivered' : 'Arrives'} between `;
  }, [status]);

  const statusLabel = useMemo(() => {
    if (status === 'not paid') return 'Order confirmed';
    if (status === 'preparing') return 'Start Production';
    if (status === 'on the way') return 'Dispatched item';
    if (status === 'delivered') return 'Product delivered';
  }, [status]);

  return (
    <div className='orderStatus'>
      <div className='orderWrap'>
        <h2>Preparing your order</h2>
        <p>
          {deliveryTime}
          <b>
            {startTime} - {endTime}
          </b>
        </p>
        <div className='orderStatusText'>
          <span className='statusText'>Status:</span>
          <span className={status}>{statusLabel}</span>
        </div>
      </div>
      <ul className='stepper'>
        <li className={statusClass(0)}>
          <div className='item'>Order confirmed</div>
        </li>
        <li className={statusClass(1)}>
          <div className='item'>Start production</div>
        </li>
        <li className={statusClass(2)}>
          <div className='item'>Dispatched item</div>
        </li>
        <li className={statusClass(3)}>
          <div className='item'>Product delivered</div>
        </li>
      </ul>
      <span className='brand'>Burger. Inc is preparing your order!</span>
    </div>
  );
};

export default OrderStatus;
