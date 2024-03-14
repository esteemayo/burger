import Link from 'next/link';
import Image from 'next/image';

import './MenuCard.scss';

const MenuCard = () => {
  return (
    <article className='menuCard'>
      <Link href='/'>
        <div className='imgWrapper'>
          <span className='overlay'>
            <button type='button'>Add to cart</button>
          </span>
          <Image src='/img/hero.png' width={291} height={270} alt='' />
        </div>
        <div className='cardFooter'>
          <h2 className='heading'>Double Grilled Chicken Burger</h2>
          <span className='price'>$6,000.00</span>
        </div>
      </Link>
    </article>
  );
};

export default MenuCard;
