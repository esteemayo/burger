import type { Metadata } from 'next';

import SuccessClient from './SuccessClient';

import './Success.scss';

export const metadata: Metadata = {
  title: 'Burger. App | Successful Payment',
};

const Success = () => {
  return (
    <div className='success'>
      <div className='container'>
        <SuccessClient />
      </div>
    </div>
  );
};

export default Success;
