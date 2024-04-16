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
      {isAdmin ? (
        <NewProduct isAdmin={isAdmin} />
      ) : (
        <DeactivateAccount isAdmin={isAdmin} />
      )}
    </div>
  );
};

export default AccountDetails;
