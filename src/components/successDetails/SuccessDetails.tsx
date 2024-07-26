import { OrderItem } from '@/types';

import './SuccessDetails.scss';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/userService';

interface SuccessDetailsProps {
  order: OrderItem;
}

const SuccessDetails = ({ order }: SuccessDetailsProps) => {
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
        <span>#{order?.id}</span>
      </div>
      <div className='contactDetails'>
        <div className='contactDetailBox'>
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
              d='M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
            />
          </svg>
          <h3>Delivery address</h3>
        </div>
        <p className='contactInfo'>
          No 10, Twins street, off ijesha road, surulere lagos, Lagos state
        </p>
      </div>
      <div className='contactDetails'>
        <div className='contactDetailBox'>
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
              d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
            />
          </svg>
          <h3>Billing address</h3>
        </div>
        <p className='contactInfo'>
          No 10, Twins street, off ijesha road, surulere lagos, Lagos state
        </p>
      </div>
      <div className='contactDetails'>
        <div className='contactDetailBox'>
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
              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
          </svg>
          <h3>Contact details</h3>
        </div>
        <p className='contactInfo'>eadebayo15@gmail.com</p>
        <p className='contactPhone'>+2348136119251</p>
        <p className='contactPhone'>+2349132311037</p>
      </div>

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
            <span>$21,999.00</span>
          </div>
          <div className='summary'>
            <span>Delivery</span>
            <span>$21,999.00</span>
          </div>
        </div>
        <div className='summaryTotal'>
          <span>Total</span>
          <span>$21,999.00</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessDetails;
