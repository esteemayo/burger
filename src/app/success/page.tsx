import type { Metadata } from 'next';

import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import './Success.scss';

export const metadata: Metadata = {
  title: 'Burger - Success page',
};

const Success = () => {
  return (
    <div className='success'>
      <div className='container'>
        <div className='wrapper'>
          <SuccessInfo />
          <SuccessDetails />
        </div>
      </div>
    </div>
  );
};

export default Success;
