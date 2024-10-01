import CountDown from '../countdown/CountDown';
import OfferImage from '../offerImage/OfferImage';

import './Offer.scss';

const Offer = () => {
  return (
    <section className='offer'>
      <div className='container'>
        <OfferImage />
        <div className='right'>
          <h1 className='heading'>Double crunchy chicken burger</h1>
          <p className='desc'>
            Our Double crunchy chicken burger are ultra crispy and absolutely
            bursting with flavour topped with fresh lettuce, cucumbers, Onions,
            our special sauce and cheese! Its an absolute crowd pleaser.
          </p>
          <CountDown />
          <button type='button'>Order now</button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
