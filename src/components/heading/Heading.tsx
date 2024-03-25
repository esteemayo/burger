'use client';

import { useMemo } from 'react';

import { HeadingProps } from '@/types';

import './Heading.scss';

const Heading = ({ title, subtitle, center }: HeadingProps) => {
  const headingClasses = useMemo(() => {
    return center.toString() === 'true' ? 'heading center' : 'heading';
  }, [center]);

  return (
    <div className={headingClasses}>
      <h1 className='mainHeading'>{title}</h1>
      <h2 className='subHeading'>{subtitle}</h2>
    </div>
  );
};

export default Heading;
