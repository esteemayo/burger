'use client';

import { useCallback, useEffect, useState } from 'react';

import { OrderItem, OrderTableProps, StatusType } from '@/types';
import { orderColumns } from '@/data';
import { useStatusModal } from '@/hooks/useStatusModal';

import Table from '../table/Table';

const OrderTable = ({ isAdmin, data }: OrderTableProps) => {
  const onOpen = useStatusModal((store) => store.onOpen);
  const onSelect = useStatusModal((store) => store.onSelect);

  const [dimension, setDimension] = useState(window.innerWidth);

  const handleDimension = useCallback(() => {
    setDimension(window.innerWidth);
  }, []);

  const orderStatus = useCallback(
    (status: StatusType) => {
      return `${status[0].toUpperCase()}${status.substring(1)}`;
    },
    []
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, order: OrderItem) => {
      e.stopPropagation();

      onOpen();
      onSelect(order);
    },
    [onOpen, onSelect]
  );

  useEffect(() => {
    window.addEventListener('resize', handleDimension);
    return () => window.removeEventListener('resize', handleDimension);
  }, [handleDimension]);

  return (
    <Table
      data={data}
      columns={orderColumns}
      isAdmin={isAdmin}
      dimension={dimension}
      orderStatus={orderStatus}
      onClick={handleClick}
    />
  );
};

export default OrderTable;
