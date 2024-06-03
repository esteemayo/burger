'use client';

import CheckoutInfo from '@/components/checkoutInfo/CheckoutInfo';
import CheckoutTotal from '@/components/checkoutTotal/CheckoutTotal';

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
