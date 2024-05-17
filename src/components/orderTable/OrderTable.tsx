'use client';

import { toast } from 'react-toastify';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { formatDate } from '@/utils/formatDate';
import { formatCurrency } from '@/utils/formatCurrency';

import { OrderItem, OrderTableProps } from '@/types';
import { useStatusModal } from '@/hooks/useStatusModal';

import './OrderTable.scss';

const OrderTable = ({ isAdmin, data }: OrderTableProps) => {
  const onOpen = useStatusModal((store) => store.onOpen);
  const onSelect = useStatusModal((store) => store.onSelect);

  const [dimension, setDimension] = useState(window.innerWidth);

  const handleDimension = useCallback(() => {
    setDimension(window.innerWidth);
  }, []);

  const orderStatus = useCallback(
    (status: 'preparing' | 'on the way' | 'delivered') => {
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
    <table className='orderTable'>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Price</th>
          <th>Products</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const { id, name, price, status, createdAt } = item;
          return (
            <tr
              key={id}
              className={`${
                status !== 'delivered' ? 'orderStatus' : 'orderDelivered'
              }`}
            >
              <td>
                <Link href={`/order/${encodeURIComponent(id)}`}>#{id}</Link>
              </td>
              <td>
                <time dateTime={createdAt}>
                  {formatDate(createdAt)}
                </time>
              </td>
              <td>{formatCurrency(price)}</td>
              <td className='orderName'>{name}</td>
              {!isAdmin ? (
                <td>{orderStatus(status)}</td>
              ) : (
                <td>
                  <form onSubmit={handleSubmit}>
                    <input type='text' placeholder={orderStatus(status)} />
                    <button type='submit'>
                      <Image
                        src='/img/edit.png'
                        width={20}
                        height={20}
                        alt='edit icon'
                      />
                    </button>
                  </form>
                  {dimension <= 768 && (
                    <div className='statusContainer'>
                      {orderStatus(status)}
                      <button
                        type='button'
                        onClick={(e) => handleClick(e, item)}
                      >
                        <Image
                          src='/svg/edit.svg'
                          width={20}
                          height={20}
                          alt='edit icon'
                        />
                      </button>
                    </div>
                  )}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OrderTable;
