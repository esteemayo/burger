import Link from 'next/link';

import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/'>
        <h1>Burger</h1>
      </Link>
    </div>
  );
};

export default Logo;
