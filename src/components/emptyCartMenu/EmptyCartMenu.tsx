import Link from 'next/link';

import './EmptyCartMenu.scss';

const EmptyCartMenu = () => {
  return (
    <div className='emptyCartMenu'>
      <div className='emptyHeader'>Empty cart</div>
      <hr />
      <div className='cartFooter'>
        <Link href='/products' className='cartBtn'>
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartMenu;
