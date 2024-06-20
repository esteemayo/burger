import Link from 'next/link';

import './EmptyCartMenu.scss';

const EmptyCartMenu = () => {
  return (
    <>
      <div className='cardHeader empty'>Empty cart</div>
      <hr />
      <div className='cartFooter'>
        <Link href='/products' className='cartBtn'>
          Continue shopping
        </Link>
      </div>
    </>
  );
};

export default EmptyCartMenu;
