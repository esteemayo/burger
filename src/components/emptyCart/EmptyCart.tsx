import Link from 'next/link';

import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <div className='emptyCart'>
      <div className='emptyHeading'>Empty cart</div>
      <div className='emptyLink'>
        <Link href='/products'>Continue shopping</Link>
      </div>
    </div>
  );
};

export default EmptyCart;
