'use client';

import { useCallback, useMemo } from 'react';

import { StatusType } from '@/types';

import './Order.scss';

interface OrderStatusProps {
  status: StatusType;
}

const OrderStatus = ({ status }: OrderStatusProps) => {
  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );

  const statusClasses = useMemo(() => {
    return statusLists.findIndex((item) => item === status);
  }, [status]);

  console.log(statusClasses)

  const statusClass = useCallback((index: number) => {
    if (index - statusClasses < 1) return 'done';
    if (index - statusClasses > 1) return 'ready';
  }, [statusClasses]);

  return (
    <div className='orderStatus'>
      <div className='orderWrap'>
        <h2>Preparing your order</h2>
        <p>
          Arrives between <b>11:52PM - 12:02AM</b>
        </p>
      </div>
      <ul className='stepper'>
        <li className={status !== 'not paid' ? 'done' : 'ready'}>
          <div className='item'>Order confirmed</div>
        </li>
        <li className={status !== 'preparing' ? 'done' : 'ready'}>
          <div className='item'>Start production</div>
        </li>
        {/* <li className='ready'>
          <div className='item'>Quality check</div>
        </li> */}
        <li className={status !== 'on the way' ? 'done' : 'ready'}>
          <div className='item'>Dispatched item</div>
        </li>
        <li className={status !== 'delivered' ? 'done' : 'ready'}>
          <div className='item'>Product delivered</div>
        </li>
      </ul>
      <span className='brand'>Burger Inc is preparing your order.</span>
    </div>
  );
};

export default OrderStatus;
