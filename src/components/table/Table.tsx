import TableHead from './TableHead';
import TableBody from './TableBody';

import { TableProps } from '@/types';

import './Table.scss';

const Table = ({
  data,
  columns,
  isAdmin,
  dimension,
  orderStatus,
  onClick,
}: TableProps) => {
  return (
    <table className='table'>
      <TableHead columns={columns} />
      <TableBody
        data={data}
        isAdmin={isAdmin}
        dimension={dimension}
        orderStatus={orderStatus}
        onClick={onClick}
      />
    </table>
  );
};

export default Table;
