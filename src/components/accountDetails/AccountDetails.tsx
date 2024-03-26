import AccountData from '../accountData/AccountData';
import AccountPassword from '../accountPassword/AccountPassword';

import './AccountDetails.scss';

const AccountDetails = () => {
  return (
    <div className='accountDetails'>
      <AccountData />
      <AccountPassword />
    </div>
  );
};

export default AccountDetails;
