import AccountPassword from '../accountPassword/AccountPassword';
import AccountData from '../accountData/AccountData';
import DeactivateAccount from '../deactivateAccount/DeactivateAccount';

import './AccountDetails.scss';

const AccountDetails = () => {
  return (
    <div className='accountDetails'>
      <AccountData />
      <AccountPassword />
      <DeactivateAccount />
    </div>
  );
};

export default AccountDetails;
