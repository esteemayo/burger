import Link from 'next/link';
import Image from 'next/image';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='container'>
        <Link href='/'>
          <Image src='/svg/blank.svg' width={300} height={300} alt='404' />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
