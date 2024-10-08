'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import Status from '../status/Status';

import { formatDate } from '@/utils/formatDate';
import { useStatus } from '@/hooks/useStatus';
import { getUser } from '@/services/userService';

import { orderSteps } from '@/data';
import { OrderItem } from '@/types';

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
            Order <span id={order?.id}></span> was placed on{' '}
            <time dateTime={order?.createdAt}>
              {order?.createdAt && formatDate(order.createdAt)}
            </time>{' '}
            and is currently in progress
          </p>
          <ul className='stepper'>
            {orderSteps.map((item) => {
              const { index, label } = item;
              return (
                <li key={index} className={statusClass(index)}>
                  <div className='item'>{label}</div>
                </li>
              );
            })}
          </ul>
          <Status status={order?.status} />
          <div className='orderDelivery'>
            <span>
              Expected delivery date:{' '}
              <time dateTime={order?.createdAt}>
                {order?.createdAt && formatDate(order.createdAt)}
              </time>
            </span>
            <Link href={url}>Track your order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessInfo;
