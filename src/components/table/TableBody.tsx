'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';

import StatusForm from '../statusForm/StatusForm';

import { formatDate } from '@/utils/formatDate';
import { excerpts } from '@/utils';
import { formatCurrency } from '@/utils/formatCurrency';

import { StatusType, TableBodyProps } from '@/types';

import './Table.scss';

const TableBody = ({ data, isAdmin, orderStatus, onClick }: TableBodyProps) => {
  const statusClasses = useCallback((status: StatusType) => {
    return status === 'not paid'
      ? 'orderNotPaid'
      : status === 'preparing'
      ? 'orderPreparing'
      : status === 'on the way'
      ? 'orderOntheway'
      : 'orderDelivered';
  }, []);

  const productClasses = useMemo(() => {
    return !isAdmin ? 'orderName' : 'orderName hide';
  }, [isAdmin]);

  return (
    <tbody>
      {data?.map((item) => {
        const { id, price, status, products, createdAt } = item;
        return (
          <tr key={id} className={statusClasses(status)}>
            <td>
              <Link href={`/order/${encodeURIComponent(id)}`}>
                #{excerpts(id, 10)}
              </Link>
            </td>
            <td>
              <time dateTime={createdAt}>{formatDate(createdAt)}</time>
            </td>
            <td>{formatCurrency(price)}</td>
            <td className={productClasses}>
              {products?.map((product) => {
                const { id, name } = product;
                return (
                  <span key={id}>
                    <Link href={`/product/${id}`}>{name}</Link> <br />
                  </span>
                );
              })}
            </td>
            {!isAdmin ? (
              <td className='userStatus'>{orderStatus(status)}</td>
            ) : (
              <td className='adminStatus'>
                <StatusForm actionId={id} status={orderStatus(status)} />
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
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
