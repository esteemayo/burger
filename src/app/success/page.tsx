import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import './Success.scss';

const Success = () => {
  return (
    <div className='success'>
      <div className='container'>
        <SuccessInfo />
        <SuccessDetails />
      </div>
    </div>
  );
};

export default Success;
