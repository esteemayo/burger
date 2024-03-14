import Link from 'next/link';
import Image from 'next/image';

import { MenuCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './MenuCard.scss';

const MenuCard = ({ name, image, price }: MenuCardProps) => {
  return (
    <article className='menuCard'>
      <Link href='/'>
        <div className='imgWrapper'>
          <span className='overlay'>
            <button type='button'>Add to cart</button>
          </span>
          <Image src={image} width={300} height={270} alt={name} />
        </div>
        <div className='cardFooter'>
          <h2 className='heading'>{name}</h2>
          <span className='price'>{formatCurrency(price)}</span>
        </div>
      </Link>
    </article>
  );
};

export default MenuCard;
