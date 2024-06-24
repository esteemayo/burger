import Link from 'next/link';

import './EmptyCheckout.scss';

const EmptyCheckout = () => {
  return (
    <div className='emptyCheckout'>
      <div className='emptyCartWrap'>
        <div className='emptyCartTitle'>Empty cart</div>
        <div className='emptyCartLinkWrap'>
          <Link href='/products' className='emptyCartLink'>
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCheckout;
