import Link from 'next/link';

import './SuccessInfo.scss';

const SuccessInfo = () => {
  return (
    <div className='successInfo'>
      <div className='successWrap'>
        <div className='successBox'>
          <div className='successIconWrap'>&nbsp;</div>
          <div className='successMessage'>
            <h2 className='successHeadingSub'>Thank you</h2>
            <h1 className='successHeadingMain'>Your order is confirmed</h1>
            <p className='successText'>
              We will be sending you an email confirmation to
              eadebayo15@gmail.com shortly
            </p>
          </div>
        </div>
        <div className='orderStatus'>
          <p>
            Order #2059665 was placed on <time>April 8, 2024</time> and is
            currently in progress
          </p>
          <ul className='stepper'>
            <li className='done'>
              <div className='item'>Order confirmed</div>
            </li>
            <li className='done'>
              <div className='item'>Start production</div>
            </li>
            <li className='ready'>
              <div className='item'>Quality check</div>
            </li>
            <li className='ready'>
              <div className='item'>Dispatched item</div>
            </li>
            <li className='ready'>
              <div className='item'>Product delivered</div>
            </li>
          </ul>
          <div className='orderDelivery'>
            <span>
              Expected delivery date: <time>16 April 2024</time>
            </span>
            <Link href='/'>Track your order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessInfo;
