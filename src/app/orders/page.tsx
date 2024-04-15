import { orders } from '@/data';
import OrderTable from '@/components/orderTable/OrderTable';

import './Orders.scss';

const Orders = () => {
  const isAdmin = true;

  return (
    <div className='orders'>
      <div className='container'>
        <OrderTable isAdmin={isAdmin} data={orders} />
      </div>
    </div>
  );
};

export default Orders;
