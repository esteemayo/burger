import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import './Review.scss';

const Review = () => {
  return (
    <article className='review'>
      <div className='reviewCard'>
        <div className='reviewWrapper'>
          <div className='reviewImg'>
            <Image
              src='/svg/male-avatar.svg'
              width={87}
              height={87}
              alt='avatar'
            />
          </div>
          <div className='reviewer'>
            <div className='reviewRating'>
              <div className='star'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className='reviewerWrap'>
              <div className='reviewerName'>Emmanuel Adebayo</div>
              <p className='reviewerText'>Looks so delicious!</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Review;
