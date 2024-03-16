import Image from 'next/image';

import CountDown from '../countdown/CountDown';

import './Offer.scss';

const Offer = () => {
  return (
    <section className='offer'>
      <div className='container'>
        <div className='left'>
          <h1 className='heading'>Double crunchy chicken burger</h1>
          <p className='desc'>
            Progressively simplify effective e-toilers and process-centric
            methods of empowerment. Quickly pontificate parallel.
          </p>
          <CountDown />
          <button type='button'>Order now</button>
        </div>
        <div className='right'>
          <div className='imgContainer'>
            <Image src='/img/offerProduct.png' fill alt='offer product' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
