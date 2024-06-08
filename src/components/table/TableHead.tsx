import { TableHeadProps } from '@/types';

import './Table.scss';

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return <th key={column.path}>{column.label}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
