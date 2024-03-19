import Link from 'next/link';

import { AuthInfoProps } from '@/types';

import './AuthInfo.scss';

const AuthInfo = ({ url, text, label }: AuthInfoProps) => {
  return (
    <div className='authInfo'>
      <p>
        {text} <Link href={url}>{label}</Link>
      </p>
    </div>
  );
};

export default AuthInfo;
