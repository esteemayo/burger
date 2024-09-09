'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Heading from '../heading/Heading';
import { EmptyStateProps } from '@/types';

import './EmptyState.scss';

const EmptyState = ({
  url,
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

      const redirectUrl = url ? `/${url}` : '/';

      router.push(redirectUrl);
      return;
    },
    [router, url]
  );

  const handleReload = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    window.location.assign(window.location.pathname);
  }, []);

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
          <button type='button' className='btnError' onClick={handleClick}>
            {label}
          </button>
        )}
        <button type='button' className='btnReload' onClick={handleReload}>
          Reload page
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
