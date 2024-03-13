import { features } from '@/data';
import Feature from '../feature/Feature';

import './Features.scss';

const Features = () => {
  return (
    <section className='features'>
      <div className='container'>
        <div className='wrapper'>
          <div className='items'>
            {features.map((feature) => {
              return <Feature key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
