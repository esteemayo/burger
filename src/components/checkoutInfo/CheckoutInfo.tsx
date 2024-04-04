import './CheckoutInfo.scss';

const CheckoutInfo = () => {
  return (
    <div className='checkoutInfo'>
      <div className='checkoutInfoWrap'>
        <div className='checkoutUserSection'>
          <div className='checkoutInfoContainer'>
            <div className='checkoutInfoBox'>
              <h3 className='checkoutInfoHeading'>Review and place order</h3>
            </div>
            <h6 className='addressHeading'>
              Review/Add address and fulfill payments to complete your purchase
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
            <hr />
          </div>
        </div>
        <div className='paymentSection'>
          <button type='button'>Place your order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
