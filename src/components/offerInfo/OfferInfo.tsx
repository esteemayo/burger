import CountDown from '../countdown/CountDown';

import './OfferInfo.scss';

const OfferInfo = () => {
  return (
    <div className='orderInfo'>
      <h1 className='heading'>Double crunchy chicken burger</h1>
      <p className='desc'>
        Our Double crunchy chicken burger are ultra crispy and absolutely
        bursting with flavour topped with fresh lettuce, cucumbers, Onions, our
        special sauce and cheese! Its an absolute crowd pleaser.
      </p>
      <CountDown />
      <button type='button'>Order now</button>
    </div>
  );
};

export default OfferInfo;
