'use client';

import OrderDetail from './OrderDetail';
import OrderStatus from './OrderStatus';

import { order } from '@/data';

import './Order.scss';

const OrderClient = () => {
  return (
    <div className='order'>
      <div className='container'>
        <div className='orderBox'>
          <OrderDetail order={order} />
          <hr />
          <OrderStatus />
        </div>
      </div>
    </div>
  );
};

export default OrderClient;
