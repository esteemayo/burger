import { TableHeadProps } from '@/types';

import './Table.scss';
import { useMemo } from 'react';

const TableHead = ({ columns, isAdmin }: TableHeadProps) => {
  const headerClasses = useMemo(() => {
    return !!isAdmin ? 'tableHead hide' : 'tableHead';
  }, [isAdmin]);

  return (
    <thead>
      <tr>
        {columns.map((column) => {
          const { path, label } = column;
          return (
            <th key={path} className={headerClasses}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
