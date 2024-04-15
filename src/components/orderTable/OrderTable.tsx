'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import { OrderTableProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './OrderTable.scss';

const OrderTable = ({ isAdmin, data }: OrderTableProps) => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              className={`${status !== 'delivered' && 'orderStatus'}`}
            >
              <td>#{id}</td>
              <td>
                {new Date(createdAt).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </td>
              <td>{formatCurrency(price)}</td>
              <td>{name}</td>
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
