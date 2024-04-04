import Link from 'next/link';
import './Checkout.scss';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='container'>
        <div className='checkoutWrap'>
          <div className='checkoutInfo'>
            <div className='checkoutInfoWrap'>
              <div className='checkoutInfoContainer'>
                <div className='checkoutInfoBox'>
                  <h3 className='checkoutInfoHeading'>
                    Review and place order
                  </h3>
                </div>
                <h6 className='addressHeading'>
                  Review/Add address and fulfill payments to complete your
                  purchase
                </h6>
                <hr />
                <h6 className='recipientHeading'>Recipient information</h6>
                <div className='customerInfo'>
                  <span className='customerName'>Emmanuel adebayo</span>
                  <span className='customerPhone'>+2348136119251</span>
                </div>
                <button type='button' className='recipientBtn'>
                  Change recipient
                </button>
                <hr />
                <h6 className='addressHeading'>Delivery Address</h6>
                <button type='button' className='deliveryBtn'>
                  Add delivery address
                </button>
              </div>
              <div className='paymentSection'>
                <button type='button'>Place your order</button>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Checkout;
