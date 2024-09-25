import { StatusType } from '@/types';
import { useStatus } from '@/hooks/useStatus';

import './Status.scss';

interface StatusProps {
  status: StatusType;
}

const Status = ({ status }: StatusProps) => {
  const { statusClasses, statusLabel } = useStatus(status);

  return (
    <div className='status'>
      <span className='statusText'>Status:</span>
      <span className={statusClasses}>{statusLabel}</span>
    </div>
  );
};

export default Status;
