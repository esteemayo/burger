import { useMemo } from 'react';

import { StatusProps } from '@/types';
import { useStatus } from '@/hooks/useStatus';

import './Status.scss';

const Status = ({ status, type }: StatusProps) => {
  const { statusClasses, statusLabel } = useStatus(status);

  const orderClasses = useMemo(() => {
    return type === 'order' ? `${statusClasses} order` : statusClasses;
  }, [statusClasses, type]);

  return (
    <div className='status'>
      <span className='statusText'>Status:</span>
      <span className={orderClasses}>{statusLabel}</span>
    </div>
  );
};

export default Status;
