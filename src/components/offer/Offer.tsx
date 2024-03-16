import Image from 'next/image';

import './Offer.scss';

const Offer = () => {
  return (
    <section className='offer'>
      <div className='container'>
        <div className='left'>
          <h1 className='header'>Double crunchy chicken burger</h1>
          <p className='desc'>
            Progressively simplify effective e-toilers and process-centric
            methods of empowerment. Quickly pontificate parallel.
          </p>
          <button type='button'>Order now</button>
        </div>
        <div className='right'>
          <Image src='/img/offerProduct.png' fill alt='offer product' />
        </div>
      </div>
    </section>
  );
};

export default Offer;
