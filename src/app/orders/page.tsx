import Input from '@/components/input/Input';

import './Orders.scss';

const Orders = () => {
  const isAdmin = true;

  return (
    <div className='orders'>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th>Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#2059665</td>
              <td>April 14, 2024</td>
              <td>$199.99</td>
              <td>Double Crunchy Chicken Burger</td>
              {!isAdmin ? (
                <td>Preparing</td>
              ) : (
                <td>
                  <form onSubmit={() => console.log('submitted')}>
                    <Input
                      onChange={(e) => console.log('changed')}
                      placeholder='status'
                    />
                    <button type='submit'>icon</button>
                  </form>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
