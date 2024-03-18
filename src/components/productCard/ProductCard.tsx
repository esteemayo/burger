import Link from 'next/link';
import Image from 'next/image';

import { ProductCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './ProductCard.scss';

const ProductCard = ({ name, image, price }: ProductCardProps) => {
  return (
    <article className='productCard'>
      <Link href='/'>
        <div className='imgWrapper'>
          <span className='overlay'>
            <button type='button' className='cartBtn'>
              Add to cart
            </button>
            <button type='button' className='likeBtn'>
              <Image
                src='/svg/heart-1.svg'
                width={36}
                height={36}
                alt='like icon'
              />
            </button>
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

export default ProductCard;
