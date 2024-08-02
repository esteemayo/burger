'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { useStatus } from '@/hooks/useStatus';
import { OrderItem } from '@/types';
import { formatDate } from '@/utils/formatDate';

import { getUser } from '@/services/userService';

import './SuccessInfo.scss';

interface SuccessInfoProps {
  order: OrderItem;
}

const SuccessInfo = ({ order }: SuccessInfoProps) => {
  const userId = order?.userId;

  const { data: user } = useQuery({
    queryKey: [`${userId}`],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
  });

  const { statusClass } = useStatus(order?.status);

  const url = useMemo(() => {
    return `/order/${encodeURIComponent(order?.id)}`;
  }, [order?.id]);

  return (
    <div className='successInfo'>
      <div className='successWrap'>
        <div className='successBox'>
          <div className='successIconWrap'>&nbsp;</div>
          <div className='successMessage'>
            <h2 className='successHeadingSub'>Thank you</h2>
            <h1 className='successHeadingMain'>Your order is confirmed</h1>
            <p className='successText'>
              We will be sending you an email confirmation to {user?.email}{' '}
              shortly
            </p>
          </div>
        </div>
        <div className='orderStatus'>
          <p>
            Order <div id={order?.id}></div> was placed on{' '}
            <time>{order?.createdAt && formatDate(order.createdAt)}</time> and is currently in
            progress
          </p>
          <ul className='stepper'>
            <li className={statusClass(0)}>
              <div className='item'>Order confirmed</div>
            </li>
            <li className={statusClass(1)}>
              <div className='item'>Start production</div>
            </li>
            <li className={statusClass(2)}>
              <div className='item'>Dispatched item</div>
            </li>
            <li className={statusClass(3)}>
              <div className='item'>Product delivered</div>
            </li>
          </ul>
          <div className='orderDelivery'>
            <span>
              Expected delivery date:{' '}
              <time>{order?.createdAt && formatDate(order.createdAt)}</time>
            </span>
            <Link href={url}>Track your order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessInfo;
