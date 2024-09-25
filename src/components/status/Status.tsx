import { useMemo } from 'react';

import { StatusProps } from '@/types';
import { useStatus } from '@/hooks/useStatus';

import './Status.scss';

const Status = ({ status, type }: StatusProps) => {
  const { statusClasses, statusLabel } = useStatus(status);

  const containerClasses = useMemo(() => {
    return type === 'order' ? 'status order' : 'status';
  }, [type]);

  return (
    <div className={containerClasses}>
      <span className='statusText'>Status:</span>
      <span className={statusClasses}>{statusLabel}</span>
    </div>
  );
};

export default Status;
