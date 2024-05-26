import { HeroProps } from '@/types';

import './Hero.scss';

const Hero = ({ name, image }: HeroProps) => {
  return (
    <header className='hero' style={{ backgroundImage: `url(${image})` }}>
      <div className='headingWrap'>
        <h1 className='heroHeading'>{name}</h1>
        <div className='heroSubHeading'>
          <span className='heroText'>Welcome to burger</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
