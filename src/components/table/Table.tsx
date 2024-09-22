import TableHead from './TableHead';
import TableBody from './TableBody';

import { TableProps } from '@/types';

import './Table.scss';

const Table = ({
  data,
  columns,
  isAdmin,
  orderStatus,
  onClick,
}: TableProps) => {
  return (
    <table className='table'>
      <TableHead columns={columns} isAdmin={isAdmin} />
      <TableBody
        data={data}
        isAdmin={isAdmin}
        orderStatus={orderStatus}
        onClick={onClick}
      />
    </table>
  );
};

export default Table;
