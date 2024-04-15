import OrderTable from '@/components/orderTable/OrderTable';

import './Orders.scss';

const Orders = () => {
  const isAdmin = true;

  return (
    <div className='orders'>
      <div className='container'>
        <OrderTable isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Orders;
