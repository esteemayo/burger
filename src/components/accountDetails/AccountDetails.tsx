import AccountPassword from '../accountPassword/AccountPassword';
import NewProduct from '../newProduct/NewProduct';
import DeactivateAccount from '../deactivateAccount/DeactivateAccount';
import AccountData from '../accountData/AccountData';

import './AccountDetails.scss';

const AccountDetails = () => {
  const isAdmin = true;

  return (
    <div className='accountDetails'>
      <AccountData />
      <AccountPassword />
      <DeactivateAccount isAdmin={isAdmin} />
      <NewProduct isAdmin={isAdmin} />
    </div>
  );
};

export default AccountDetails;
