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

  const deliveryTime = useMemo(() => {
    const date = new Date(createdAt);
    date.setMinutes(date.getMinutes() + 30);

    return formatTime(date);
  }, [createdAt]);

  return (
    <div className='orderStatus'>
      <div className='orderWrap'>
        <h2>Preparing your order</h2>
        <p>
          Arrives between{' '}
          <b>
            {startTime} - {deliveryTime}
          </b>
        </p>
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
