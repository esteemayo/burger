import { excerpts } from '@/utils';
import { formatCurrency } from '@/utils/formatCurrency';

import { OrderDetailProps } from '@/types';

import './Order.scss';

const OrderDetail = ({ order }: OrderDetailProps) => {
  return (
    <div className='orderDetail'>
      <h1 className='orderHeading'>Order Detail</h1>
      <div className='orderContainer'>
        <div className='orderItem'>
          <h3>Order ID</h3>
          <span>#{order.id}</span>
        </div>
        <div className='orderItem'>
          <h3>Ship Date</h3>
          <time dateTime={order.createdAt}>
            {new Date(order.createdAt).toLocaleString('en-us', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
        <div className='orderItem'>
          <h3>Customer</h3>
          <span>{order.name}</span>
        </div>
        <div className='orderItem'>
          <h3>Shipping To</h3>
          <span>{excerpts(order.address, 15)}</span>
        </div>
        <div className='orderItem'>
          <h3>Total</h3>
          <span className='orderTotal'>{formatCurrency(order.total)}</span>
        </div>
        <div className='orderItem'>
          <h3>Delivery Date</h3>
          <time dateTime={order.deliveryDate}>
            {new Date(order.deliveryDate).toLocaleString('en-us', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
