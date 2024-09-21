import { useCallback } from 'react';

import { TableHeadProps } from '@/types';

import './Table.scss';

const TableHead = ({ columns, isAdmin }: TableHeadProps) => {
  const headerClasses = useCallback(
    (path: string) => {
      return !!isAdmin ? `${path} hide` : path;
    },
    [isAdmin]
  );

  return (
    <thead>
      <tr>
        {columns.map((column) => {
          const { path, label } = column;
          return (
            <th key={path} className={headerClasses(path)}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
