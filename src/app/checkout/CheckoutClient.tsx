'use client';

import './Checkout.scss';

const CheckoutClient = () => {
  return (
    <div className='checkout'>
      <div className='container'>
        <div className='checkoutWrap'>
          <CheckoutInfo />
          <CheckoutTotal />
        </div>
      </div>
    </div>
  );
};

export default CheckoutClient;
