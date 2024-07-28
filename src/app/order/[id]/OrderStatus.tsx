import { StatusType } from '@/data';

import './Order.scss';

interface OrderStatusProps {
  status: StatusType;
}

const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className='orderStatus'>
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
  );
};

export default OrderStatus;
