'use client';

import { useCallback } from 'react';

import { orderColumns } from '@/data';
import { OrderItem, OrderTableProps, StatusType } from '@/types';

import { useStatusModal } from '@/hooks/useStatusModal';

import Table from '../table/Table';

const OrderTable = ({ isAdmin, data }: OrderTableProps) => {
  const onOpen = useStatusModal((store) => store.onOpen);
  const onSelect = useStatusModal((store) => store.onSelect);

  const orderStatus = useCallback((status: StatusType) => {
    return `${status[0].toUpperCase()}${status.substring(1)}`;
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, order: OrderItem) => {
      e.stopPropagation();

      onOpen();
      onSelect(order);
    },
    [onOpen, onSelect]
  );

  return (
    <Table
      data={data}
      columns={orderColumns}
      isAdmin={isAdmin}
      orderStatus={orderStatus}
      onClick={handleClick}
    />
  );
};

export default OrderTable;
