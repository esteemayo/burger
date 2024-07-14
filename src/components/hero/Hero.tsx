'use client';

import { useMemo } from 'react';

import { HeroProps } from '@/types';

import './Hero.scss';

const Hero = ({ name, image }: HeroProps) => {
  const headerBgImg = useMemo(() => {
    return `linear-gradient(to bottom right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.5)),url(${image})`;
  }, [image]);

  return (
    <header className='hero' style={{ backgroundImage: headerBgImg }}>
      <div className='headingWrap'>
        <h1 className='heroHeading'>{name}</h1>
        <div className='heroSubHeading'>
          <span className='heroText'>Welcome to Burger.</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
