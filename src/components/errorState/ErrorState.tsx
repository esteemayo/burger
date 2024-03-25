import Image from 'next/image';

import './ErrorState.scss';

const ErrorState = () => {
  return (
    <div className='errorState'>
      <div className='container'>
        <Image src='/svg/bugs.svg' width={400} height={400} alt='error' />
      </div>
    </div>
  );
};

export default ErrorState;
