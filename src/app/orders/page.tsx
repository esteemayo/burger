import './Orders.scss';

const Orders = () => {
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
              <td>Preparing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
