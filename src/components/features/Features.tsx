import LocalDiningIcon from '@mui/icons-material/LocalDining';

import './Features.scss';
import Link from 'next/link';

const Features = () => {
  return (
    <section className='features'>
      <div className='container'>
        <div className='wrapper'>
          <div className='items'>
            <article className='item'>
              <div className='iconWrapper'>
                <LocalDiningIcon />
              </div>
              <h3 className='heading'>
                <Link href='/'>Tropical atmosphere</Link>
              </h3>
              <p className='desc'>
                Our restaurant offers an amazing dining atmosphere for you and
                your guests.
              </p>
            </article>
            <article className='item'>
              <div className='iconWrapper'>
                <LocalDiningIcon />
              </div>
              <h3 className='heading'>
                <Link href='/'>Delicious food</Link>
              </h3>
              <p className='desc'>
                Our foods are carefully sourced and prepared for the nourishment
                of everyone
              </p>
            </article>
            <article className='item'>
              <div className='iconWrapper'>
                <LocalDiningIcon />
              </div>
              <h3 className='heading'>
                <Link href='/'>Fast delivery</Link>
              </h3>
              <p className='desc'>
                Get the best customer service experience with your orders at any
                time
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
