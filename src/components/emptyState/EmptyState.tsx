import Image from 'next/image';

import Heading from '../heading/Heading';

import './EmptyState.scss';

const EmptyState = () => {
  return (
    <div className='emptyState'>
      <div className='container'>
        <Image src='/svg/empty.svg' width={400} height={400} alt='error' />
        <Heading
          title='Product not found'
          subtitle="Looks like there's no product with that ID."
          center={true}
        />
      </div>
    </div>
  );
};

export default EmptyState;
