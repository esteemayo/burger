import Image from 'next/image';

import Heading from '../heading/Heading';
import { EmptyStateProps } from '@/types';

import './EmptyState.scss';

const EmptyState = ({
  title,
  subtitle,
  center = true,
  imgSrc,
}: EmptyStateProps) => {
  return (
    <div className='emptyState'>
      <div className='container'>
        {imgSrc && (
          <Image
            src={`/svg/${imgSrc}.svg`}
            width={400}
            height={400}
            alt={imgSrc}
          />
        )}
        <Heading title={title} subtitle={subtitle} center={center} />
      </div>
    </div>
  );
};

export default EmptyState;
