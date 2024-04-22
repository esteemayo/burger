import { order } from '@/data';
import { formatCurrency } from '@/utils/formatCurrency';

import './Order.scss';

const Order = () => {
  return (
    <div className='order'>
      <div className='container'>
        <div className='orderBox'>
          <div className='orderContainer'>
            <h1 className='orderHeading'>Your order</h1>
            <div className='orderDetails'>
              <div className='orderDetailItem'>
                <h3>Order ID</h3>
                <span>#{order.id}</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Ship Date</h3>
                <span>
                  {new Date(order.createdAt).toLocaleString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className='orderDetailItem'>
                <h3>Customer</h3>
                <span>{order.name}</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Shipping To</h3>
                <span>{order.address}</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Total</h3>
                <span>{formatCurrency(order.total)}</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Expected Delivery Date</h3>
                <span>
                  {new Date(order.deliveryDate).toLocaleString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className='orderWrap'>
            <h2>Preparing your order</h2>
            <p>
              Arrives between <b>11:52PM - 12:02AM</b>
            </p>
          </div>
          <ul className='stepper'>
            <li className='done'>
              <div className='item'>Order confirmed</div>
            </li>
            <li className='done'>
              <div className='item'>Start production</div>
            </li>
            <li className='ready'>
              <div className='item'>Quality check</div>
            </li>
            <li className='ready'>
              <div className='item'>Dispatched item</div>
            </li>
            <li className='ready'>
              <div className='item'>Product delivered</div>
            </li>
          </ul>
          <span className='brand'>Burger Inc is preparing your order.</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
