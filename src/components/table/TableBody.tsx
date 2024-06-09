'use client';

import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useCallback } from 'react';

import { formatDate } from '@/utils/formatDate';
import { excerpts } from '@/utils';
import { formatCurrency } from '@/utils/formatCurrency';

import { TableBodyProps } from '@/types';
import { updateOrder } from '@/services/orderService';

import StatusForm from '../statusForm/StatusForm';

import './Table.scss';

const TableBody = ({
  data,
  isAdmin,
  dimension,
  orderStatus,
  onClick,
}: TableBodyProps) => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>, orderId: string) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const status = input.value;

      try {
        const { data } = await updateOrder(orderId, { status });
        console.log(data);

        form.reset();
        toast.success("Changed order's status");
      } catch (err: unknown) {
        console.log(err);
      }
    },
    []
  );
  return (
    <tbody>
      {data?.map((item) => {
        const { id, price, status, products, createdAt } = item;
        return (
          <tr
            key={id}
            className={`${
              status !== 'delivered' ? 'orderStatus' : 'orderDelivered'
            }`}
          >
            <td>
              <Link href={`/order/${encodeURIComponent(id)}`}>
                #{excerpts(id, 10)}
              </Link>
            </td>
            <td>
              <time dateTime={createdAt}>{formatDate(createdAt)}</time>
            </td>
            <td>{formatCurrency(price)}</td>
            <td className='orderName'>
              {products?.map((product) => {
                return (
                  <span key={product.id}>
                    {product.name} <br />
                  </span>
                );
              })}
            </td>
            {!isAdmin ? (
              <td>{orderStatus(status)}</td>
            ) : (
              <td>
                <StatusForm actionId={id} status={orderStatus(status)} />
                {dimension <= 768 && (
                  <div className='statusContainer'>
                    {orderStatus(status)}
                    <button type='button' onClick={(e) => onClick(e, item)}>
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
  );
};

export default TableBody;
