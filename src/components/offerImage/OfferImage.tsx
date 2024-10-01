import Image from 'next/image';

import './OfferImage.scss';

const OfferImage = () => {
  return (
    <div className='offerImage'>
      <div className='imgContainer'>
        <Image src='/img/offerProduct.png' fill alt='offer product' />
      </div>
    </div>
  );
};

export default OfferImage;
