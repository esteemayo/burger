import OfferInfo from '../offerInfo/OfferInfo';
import OfferImage from '../offerImage/OfferImage';

import './Offer.scss';

const Offer = () => {
  return (
    <section className='offer'>
      <div className='container'>
        <OfferImage />
        <OfferInfo />
      </div>
    </section>
  );
};

export default Offer;
