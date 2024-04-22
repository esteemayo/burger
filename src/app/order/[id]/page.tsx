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
                <span>#2059665</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Ship Date</h3>
                <span>April 22, 2024</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Customer</h3>
                <span>Emmanuel Adebayo</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Shipping To</h3>
                <span>
                  No 10, Twins street, off ijesha road, surulere lagos, Lagos
                  state
                </span>
              </div>
              <div className='orderDetailItem'>
                <h3>Total</h3>
                <span>$199.99</span>
              </div>
              <div className='orderDetailItem'>
                <h3>Expected Delivery Date</h3>
                <span>April 27, 2024</span>
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
