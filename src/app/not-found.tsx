import Image from 'next/image';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='container'>
        <Image src='/svg/blank.svg' width={300} height={300} alt='404' />
      </div>
    </div>
  );
};

export default NotFound;
