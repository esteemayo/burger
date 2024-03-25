import Image from 'next/image';

import Heading from '../heading/Heading';

import './ErrorState.scss';

const ErrorState = () => {
  return (
    <div className='errorState'>
      <div className='container'>
        <Image src='/svg/bugs.svg' width={400} height={400} alt='error' />
        <Heading
          title='Something went wrong'
          subtitle="We're having issues loading this page. Try again"
          center={true}
        />
      </div>
    </div>
  );
};

export default ErrorState;
