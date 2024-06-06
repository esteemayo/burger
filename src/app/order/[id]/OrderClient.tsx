'use client';

import { useQuery } from '@tanstack/react-query';

import OrderDetail from './OrderDetail';
import OrderStatus from './OrderStatus';

import { order } from '@/data';
import { getOrder } from '@/services/orderService';

import './Order.scss';

interface OrderClientProps {
  orderId: string;
}

const OrderClient = ({ orderId }: OrderClientProps) => {
  const { isLoading, data } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const { data } = await getOrder(orderId);
      return data;
    },
    enabled: !!orderId,
  });

  console.log(data)

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className='order'>
      <div className='container'>
        <div className='orderBox'>
          <OrderDetail order={order} />
          <hr />
          <OrderStatus />
        </div>
      </div>
    </div>
  );
};

export default OrderClient;
