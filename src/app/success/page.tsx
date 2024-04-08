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
        </div>
      </div>
    </div>
  );
};

export default Success;
