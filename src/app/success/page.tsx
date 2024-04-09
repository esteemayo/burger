import Link from 'next/link';
import Image from 'next/image';

import './Success.scss';

const Success = () => {
  return (
    <div className='success'>
      <div className='container'>
        <div className='successWrap'>
          <div className='successBox'>
            <div className='successIconWrap'>
              <Image
                src='/svg/check.svg'
                width={50}
                height={50}
                alt='check icon'
                className='successIcon'
              />
            </div>
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
            <div className='orderIconWrap'>
              <div className='statusIconWrap active'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              <div className='statusIconWrap'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              <div className='statusIconWrap'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              <div className='statusIconWrap'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
              <div className='statusIconWrap'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m4.5 12.75 6 6 9-13.5'
                  />
                </svg>
              </div>
            </div>
            <div className='orderStatusText'>
              <span>Order confirmed</span>
              <span>Start production</span>
              <span>Quality check</span>
              <span>Dispatched item</span>
              <span>Product delivered</span>
            </div>
            <div className='orderDelivery'>
              <span>
                Expected delivery date: <time>16 April 2024</time>
              </span>
              <Link href='/'>Track your order</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
