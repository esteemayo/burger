'use client';

import { toast } from 'react-toastify';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { formatDate } from '@/utils/formatDate';
import { formatCurrency } from '@/utils/formatCurrency';

import { OrderTableProps } from '@/types';

import './OrderTable.scss';

const OrderTable = ({ isAdmin, data }: OrderTableProps) => {
  const [dimension, setDimension] = useState(window.innerWidth);

  const handleDimension = useCallback(() => {
    setDimension(window.innerWidth);
  }, []);

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
    return window.removeEventListener('resize', handleDimension);
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
                  {formatDate(new Date(createdAt))}
                </time>
              </td>
              <td>{formatCurrency(price)}</td>
              <td className='orderName'>{name}</td>
              {!isAdmin ? (
                <td>{status}</td>
              ) : (
                <td>
                  <form onSubmit={handleSubmit}>
                    <input type='text' placeholder={status} />
                    <button type='submit'>
                      <Image
                        src='/img/edit.png'
                        width={20}
                        height={20}
                        alt='edit icon'
                      />
                    </button>
                  </form>
                  {dimension === 768 && (
                    <button type='button'>
                      <Image
                        src='/img/edit.png'
                        width={20}
                        height={20}
                        alt='edit icon'
                      />
                    </button>
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
