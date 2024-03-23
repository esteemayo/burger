'use client';

import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ProductInfoProps } from '@/types';

import './ProductInfo.scss';

const ProductInfo = ({ value }: ProductInfoProps) => {
  return (
    <section className='productInfo'>
      <div className='container'>
        <h3>Double grilled chicken burger</h3>
        <p className='desc'>
          Our Chicken nuggets are made from freshly ground well spiced chicken
          breast dipped in batter and fried to golden perfection!
        </p>
        <div className='wrapper'>
          <div className='reviewWrap'>
            <div className='starRating'>
              <Rating
                name='read-only'
                value={value}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                }
                readOnly
              />
            </div>
            <span className='totalReview'>0 reviews</span>
          </div>
          <span className='heartWrap'>
            <Image
              src='/svg/heart-1.svg'
              width={20}
              height={20}
              alt='heart icon'
            />
          </span>
          <span className='price'>$5999.0</span>
        </div>
        <div className='quantity'>
          <input type='number' defaultValue={1} min={1} max={10} />
          <button type='button'>
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
