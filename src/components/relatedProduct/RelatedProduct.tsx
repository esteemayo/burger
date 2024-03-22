import Link from 'next/link';
import Image from 'next/image';

import './RelatedProduct.scss';

const RelatedProduct = () => {
  return (
    <article className='relatedProduct'>
      <div className='relatedBox'>
        <div className='relatedThumbnail'>
          <span className='relatedOverlay'>
            <button type='button' className='relatedBtn'>
              Add to cart
            </button>
          </span>
          <Image
            src='/img/hero.png'
            width={220}
            height={170}
            alt='product image'
          />
        </div>
        <div className='relatedContent'>
          <Link href={`/product/1`}>
            <h2 className='relatedHeading'>Grilled Chicken Burger</h2>
            <span className='relatedPrice'>$4,000.00</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RelatedProduct;
