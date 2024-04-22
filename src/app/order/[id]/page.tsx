import type { Metadata } from 'next';

import OrderDetail from './OrderDetail';
import OrderStatus from './OrderStatus';

import { order } from '@/data';

import './Order.scss';

export const metadata: Metadata = {
  title: 'Burger - Order page',
};

const Order = () => {
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

export default Order;
