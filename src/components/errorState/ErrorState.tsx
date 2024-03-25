import Image from 'next/image';

import './ErrorState.scss';

const ErrorState = () => {
  return (
    <div className='errorState'>
      <div className='container'>
        <Image src='/svg/bug.svg' width={500} height={500} alt='error' />
      </div>
    </div>
  );
};

export default ErrorState;
