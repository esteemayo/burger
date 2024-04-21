import './Order.scss';

const Order = () => {
  return (
    <div className='order'>
      <div className='container'>
        <div className='orderBox'>
          <div className='orderWrap'>
            <h1>Preparing your order</h1>
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
          <span>Burger Inc is preparing your order.</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
