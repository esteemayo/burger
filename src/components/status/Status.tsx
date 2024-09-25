import { useMemo } from 'react';

import { StatusType } from '@/types';

import './Status.scss';

interface StatusProps {
  status: StatusType;
}

const Status = ({ status }: StatusProps) => {
  const statusLabel = useMemo(() => {
    if (status === 'not paid') return 'Order confirmed';
    if (status === 'preparing') return 'Start Production';
    if (status === 'on the way') return 'Dispatched item';
    if (status === 'delivered') return 'Product delivered';
  }, [status]);

  const statusClasses = useMemo(() => {
    if (status === 'not paid') return 'notPaid';
    if (status === 'on the way') return 'onTheWay';
    return status;
  }, [status]);

  return (
    <div className='status'>
      <span className='statusText'>Status:</span>
      <span className={statusClasses}>{statusLabel}</span>
    </div>
  );
};

export default Status;
