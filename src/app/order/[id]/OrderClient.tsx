'use client';

import { useQuery } from '@tanstack/react-query';

import OrderDetail from './OrderDetail';
import OrderStatus from './OrderStatus';

import { getOrder } from '@/services/orderService';

import './Order.scss';

interface OrderClientProps {
  orderId: string;
}

const OrderClient = ({ orderId }: OrderClientProps) => {
  const { isLoading, data: order } = useQuery({
    queryKey: ['order'],
    queryFn: async () => {
      const { data } = await getOrder(orderId);
      return data;
    },
    enabled: !!orderId,
  });

  console.log(order)

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
