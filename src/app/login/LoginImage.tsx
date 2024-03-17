import Image from 'next/image';

import './Login.scss';

const LoginImage = () => {
  return (
    <div className='imgWrap'>
      <Image
        src='/svg/process.svg'
        width={400}
        height={350}
        alt='login illustration'
      />
    </div>
  );
};

export default LoginImage;
