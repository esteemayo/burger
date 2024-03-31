import Link from 'next/link';
import Image from 'next/image';

import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/'>
        <Image
          src='/svg/logo.svg'
          priority
          width={100}
          height={100}
          alt='logo'
        />
      </Link>
    </div>
  );
};

export default Logo;
