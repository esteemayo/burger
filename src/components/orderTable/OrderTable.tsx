'use client';

import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';

import { OrderItem, OrderTableProps } from '@/types';
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
    (status: 'not paid' | 'preparing' | 'on the way' | 'delivered') => {
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

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    console.log(status);

    form.reset();
    toast.success("Changed order's status");
  }, []);

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
      onSubmit={handleSubmit}
    />
  );
};

export default OrderTable;
