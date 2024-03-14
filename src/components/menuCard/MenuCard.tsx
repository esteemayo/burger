import Link from 'next/link';
import './MenuCard.scss';
import Image from 'next/image';

const MenuCard = () => {
  return (
    <article className='menuCard'>
      <Link href='/'>
        <div className='imgWrapper'>
          <Image src='/img/hero.png' width={291} height={243} alt='' />
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
