'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Heading from '../heading/Heading';
import { EmptyStateProps } from '@/types';

import './EmptyState.scss';

const EmptyState = ({
  title,
  subtitle,
  center = true,
  imgSrc,
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  const url = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      return router.push('/');
    },
    [router]
  );

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
        {showReset && (
          <button type='button' onClick={url}>
            Return home
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
