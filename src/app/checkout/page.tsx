import './Checkout.scss';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='container'>
        <div className='checkoutWrap'>
          <div className='checkoutInfo'>
            <div className='checkoutInfoWrap'>
              <div className='checkoutInfoBox'>
                <h3>Review and place order</h3>
              </div>
              <h6>
                Review/Add address and fulfill payments to complete your
                purchase
              </h6>
              <hr />
              <h6>Recipient information</h6>
              <div className='customerInfo'>
                <span>Emmanuel adebayo</span>
                <span>+2348136119251</span>
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
          <div className='checkoutTotal'>total</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
