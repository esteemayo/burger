'use client';

import { useCallback, useMemo } from 'react';

import { StatusType } from '@/types';

import './Order.scss';

interface OrderStatusProps {
  createdAt: string;
  status: StatusType;
}

const OrderStatus = ({ createdAt, status }: OrderStatusProps) => {
  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );

  const statusIndex = useMemo(() => {
    return statusLists.findIndex((item) => item === status);
  }, [status]);

  const statusClass = useCallback(
    (index: number) => {
      if (index - statusIndex < 1) return 'done';
      if (index - statusIndex === 1) return 'ready';
      if (index - statusIndex > 1) return 'ready';
    },
    [statusIndex]
  );

  const startTime = useMemo(() => {
    const date = new Date();
    return date.toLocaleTimeString(createdAt, { hour: '2 digit', minute: '2 digit', hour: true});
  }, [createdAt]);

  return (
    <div className='orderStatus'>
      <div className='orderWrap'>
        <h2>Preparing your order</h2>
        <p>
          Arrives between <b>{startTime} - 12:02AM</b>
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
      <span className='brand'>Burger Inc is preparing your order.</span>
    </div>
  );
};

export default OrderStatus;
