'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';

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
  showReload,
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

  const imgClasses = useMemo(() => {
    return !!imgSrc ? 'emptyImg show' : 'emptyImg hide';
  }, [imgSrc]);

  const btnResetClasses = useMemo(() => {
    return showReset ? 'btnReset show' : 'btnReset hide';
  }, [showReset]);

  const btnReloadClasses = useMemo(() => {
    return showReload ? 'btnReload show' : 'btnReload hide';
  }, [showReload]);

  return (
    <div className='emptyState'>
      <div className='container'>
        <Image
          src={`/svg/${imgSrc}.svg`}
          width={300}
          height={300}
          alt={imgSrc as string}
          className={imgClasses}
        />
        <Heading title={title} subtitle={subtitle} center={center} />
        <button type='button' className={btnResetClasses} onClick={handleClick}>
          {label}
        </button>
        <button
          type='button'
          className={btnReloadClasses}
          onClick={handleReload}
        >
          Reload page
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
