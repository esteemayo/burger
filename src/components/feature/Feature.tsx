import Link from 'next/link';

import { FeatureProps } from '@/types';

import './Feature.scss';

const Feature = ({ title, desc, icon: Icon }: FeatureProps) => {
  return (
    <article className='feature'>
      <div className='wrapper'>
        <div className='icon'>
          <Icon />
        </div>
        <h3 className='heading'>
          <Link href='/'>{title}</Link>
        </h3>
        <p className='desc'>{desc}</p>
      </div>
    </article>
  );
};

export default Feature;
