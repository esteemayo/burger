import SuccessInfo from '@/components/successInfo/SuccessInfo';
import SuccessDetails from '@/components/successDetails/SuccessDetails';

import './Success.scss';

const SuccessClient = () => {
  return (
    <div className='wrapper'>
      <SuccessInfo />
      <SuccessDetails />
    </div>
  );
};

export default SuccessClient;
