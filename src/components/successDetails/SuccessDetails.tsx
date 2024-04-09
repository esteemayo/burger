import './SuccessDetails.scss';

const SuccessDetails = () => {
  return (
    <div className='successDetails'>
      <div className='detailWrap'>
        <h2>Order detail</h2>
        <span>#2059665</span>
      </div>
      <div className='contactDetails'>
        <h3>Delivery address</h3>
        <p className='contactInfo'>
          No 10, Twins street, off ijesha road, surulere lagos, Lagos state
        </p>
      </div>
      <div className='contactDetails'>
        <h3>Billing address</h3>
        <p className='contactInfo'>
          No 10, Twins street, off ijesha road, surulere lagos, Lagos state
        </p>
      </div>
      <div className='contactDetails'>
        <h3>Contact details</h3>
        <p className='contactInfo'>eadebayo15@gmail.com</p>
        <p className='contactPhone'>+2348136119251</p>
        <p className='contactPhone'>+2349132311037</p>
      </div>

      <div className='orderSummaryWrap'>
        <div className='orderSummary'>
          <h3>Order summary (3)</h3>
        </div>
        <div className='summaryBox'>
          <div className='summary'>
            <span>Sub total</span>
            <span>$21999.00</span>
          </div>
          <div className='summary'>
            <span>Delivery</span>
            <span>$21999.00</span>
          </div>
        </div>
        <div className='summaryTotal'>
          <span>Total</span>
          <span>$21999.00</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessDetails;
