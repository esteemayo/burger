import CheckoutInfo from '@/components/checkoutInfo/CheckoutInfo';
import CheckoutTotal from '@/components/checkoutTotal/CheckoutTotal';

import './Checkout.scss';

const Checkout = () => {
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

export default Checkout;
