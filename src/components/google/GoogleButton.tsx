import Image from 'next/image';

import Button from '../button/Button';

const GoogleButton = () => {
  return (
    <Button label='Continue with Google' className='googleBtn'>
      <Image src='/img/google.png' width={15} height={15} alt='google icon' />
    </Button>
  );
};

export default GoogleButton;
