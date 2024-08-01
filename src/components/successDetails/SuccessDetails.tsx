'use client';

import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/services/userService';
import { OrderItem } from '@/types';
import { useCartStore } from '@/hooks/useCartStore';

import { contactDetails } from '@/data';
import { excerpts } from '@/utils';
import { formatCurrency } from '@/utils/formatCurrency';

import './SuccessDetails.scss';

interface SuccessDetailsProps {
  order: OrderItem;
}

const SuccessDetails = ({ order }: SuccessDetailsProps) => {
  const totalItems = useCartStore((store) => store.totalItems);

  const userId = order?.userId;

  const { data: user } = useQuery({
    queryKey: [`${userId}`],
    queryFn: async () => {
      const { data } = await getUser(userId);
      return data;
    },
    enabled: !!userId,
  });

  console.log(user);

  return (
    <div className='successDetails'>
      <div className='detailWrap'>
        <h2>Order detail</h2>
        <span>#{excerpts(order?.id, 8)}</span>
      </div>
      {contactDetails.map((item) => {
        const { id, icon, label, email, phone, address } = item;
        return (
          <div key={id} className='contactDetails'>
            <div className='contactDetailBox'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d={icon} />
              </svg>
              <h3>{label}</h3>
            </div>
            {address && <p className='contactInfo'>{user?.[address]}</p>}
            {email&& <p className='contactInfo'>{user?.[email]}</p>}
            {phone && <p className='contactPhone'>{user?.[phone]}</p>}
            {phone && <p className='contactPhone'>{user?.[phone]}</p>}
          </div>
        );
      })}
      <div className='orderSummaryWrap'>
        <div className='orderSummary'>
          <h3>Order summary (3)</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </div>
        <div className='summaryBox'>
          <div className='summary'>
            <span>Sub total</span>
            <span>{formatCurrency(totalItems)}</span>
          </div>
          <div className='summary'>
            <span>Delivery</span>
            <span>{formatCurrency(totalItems)}</span>
          </div>
        </div>
        <div className='summaryTotal'>
          <span>Total</span>
          <span>{formatCurrency(totalItems)}</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessDetails;
