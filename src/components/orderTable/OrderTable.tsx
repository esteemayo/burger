'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Image from 'next/image';

import { OrderTableProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './OrderTable.scss';

const OrderTable = ({ isAdmin, data }: OrderTableProps) => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    console.log(status);

    form.reset();
    toast.success("Changed order's status");
  }, []);

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
                  {new Date(createdAt).toLocaleString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
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
