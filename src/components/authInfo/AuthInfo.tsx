import Link from 'next/link';

import './AuthInfo.scss';

const AuthInfo = () => {
  return (
    <div className='authInfo'>
      <p>
        Already registered? <Link href='/login'>Sign in</Link>
      </p>
    </div>
  );
};

export default AuthInfo;
