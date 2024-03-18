import Image from 'next/image';

import './Register.scss';

const RegisterImage = () => {
  return (
    <div className='imgWrap'>
      <Image
        src='/svg/sign-up.svg'
        width={400}
        height={350}
        alt='register illustration'
      />
    </div>
  );
};

export default RegisterImage;
