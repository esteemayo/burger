import Image from 'next/image';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='container'>
        <Image src='/svg/blank.svg' width={400} height={400} alt='404' />
      </div>
    </div>
  );
};

export default NotFound;
