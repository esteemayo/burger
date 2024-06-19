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
  label = 'Return home',
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      router.push('/');
      return
    },
    [router]
  );

  return (
    <div className='emptyState'>
      <div className='container'>
        {imgSrc && (
          <Image
            src={`/svg/${imgSrc}.svg`}
            width={300}
            height={300}
            alt={imgSrc}
          />
        )}
        <Heading title={title} subtitle={subtitle} center={center} />
        {showReset && (
          <button type='button' onClick={handleClick}>
            {label}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
