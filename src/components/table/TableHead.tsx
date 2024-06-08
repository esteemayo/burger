import { TableHeadProps } from '@/types';

import './Table.scss';

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => {
          const { path, label } = column;
          return <th key={path}>{label}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
