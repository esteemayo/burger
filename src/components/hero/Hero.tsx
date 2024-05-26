import './Hero.scss';

interface HeroProps {
  name: string;
}

const Hero = ({ name }: HeroProps) => {
  return (
    <header className='hero'>
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
