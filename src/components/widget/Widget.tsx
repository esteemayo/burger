'use client';

import Image from 'next/image';

import { WidgetProps } from '@/types';

import './Widget.scss';

const Widget = ({ icon, count, price, label }: WidgetProps) => {
  return (
    <article className='widget'>
      <div className='statsWrap'>
        <h2>{count ?? price}</h2>
        <span>{label}</span>
      </div>
      <div className='widgetIconWrap'>
        <Image src={icon} width={22.5} height={22.5} alt='icon' />
      </div>
    </article>
  );
};

export default Widget;
