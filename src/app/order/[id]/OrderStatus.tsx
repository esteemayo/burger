'use client';

import { useMemo } from 'react';

import Status from '@/components/status/Status';

import { useStatus } from '@/hooks/useStatus';
import { formatTime } from '@/utils/formatTime';

import { orderSteps } from '@/data';
import { OrderStatusProps } from '@/types';

import './Order.scss';

const OrderStatus = ({ createdAt, status }: OrderStatusProps) => {
  const { statusClass, orderStatus } = useStatus(status);

  const startTime = useMemo(() => {
    return formatTime(createdAt);
  }, [createdAt]);

  const endTime = useMemo(() => {
    const date = new Date(createdAt);
    date.setMinutes(date.getMinutes() + 30);

    return formatTime(date);
  }, [createdAt]);

  const deliveryTime = useMemo(() => {
    return `${status === 'delivered' ? 'Delivered' : 'Arrives'} between`;
  }, [status]);

  return (
    <div className='orderStatus'>
      <div className='orderWrap'>
        <h2>Preparing your order</h2>
        <p>
          {deliveryTime}{' '}
          <b>
            {startTime} - {endTime}
          </b>
        </p>
      </div>
      <Status status={status} type='order' />
      <ul className='stepper'>
        {orderSteps.map((item) => {
          const { index, label } = item;
          return (
            <li key={index} className={statusClass(index)}>
              <div className='item'>{label}</div>
            </li>
          );
        })}
      </ul>
      <span className='brand'>Burger. Inc {orderStatus} your order!</span>
    </div>
  );
};

export default OrderStatus;
