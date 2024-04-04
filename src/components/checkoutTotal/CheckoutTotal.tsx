import Link from 'next/link';

import './CheckoutTotal.scss';

const CheckoutTotal = () => {
  return (
    <div className='checkoutTotal'>
      <div className='checkoutWrap'>
        <div className='checkoutDetail'>
          <div className='checkoutCard'>
            <div className='checkoutHeader'>
              Your order from
              <p className='checkoutCustomer'>Emmanuel adebayo</p>
            </div>
            <div className='checkoutBody'>
              <div className='checkoutProductBox'>
                <div className='checkoutProduct'>
                  <div className='checkoutProductName'>
                    <Link href='/'>Double beef burger</Link>
                    <div className='checkoutQty'>
                      <button type='button'>-</button>
                      <span className='qty'>1</span>
                      <button type='button'>+</button>
                    </div>
                  </div>
                  <div className='checkoutDeleteWrap'>
                    <button type='button'>X</button>
                  </div>
                  <div className='checkoutPrice'>
                    <span>$12999.00</span>
                  </div>
                </div>
              </div>
              <div className='checkoutTotal'>
                <div className='checkoutTotalPrice'>
                  <span>Items total</span>
                  <span>$12999.00</span>
                </div>
                <div className='checkoutTotalPrice'>
                  <span>Discount</span>
                  <span>$0.00</span>
                </div>
                <div className='checkoutTotalPrice'>
                  <span>Delivery charge</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div className='totalCheckout'>
                <span>Total:</span>
                <span>$12999.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
