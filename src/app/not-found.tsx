import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Heading from '@/components/heading/Heading';

import './NotFound.scss';

export const metadata: Metadata = {
  title: 'Burger - Not found page',
};

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='container'>
        <Link href='/'>
          <Image src='/svg/blank.svg' width={300} height={300} alt='404' />
          <Heading
            title='Page not found!'
            subtitle='Try again later.'
            center
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
