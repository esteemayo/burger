import AccountInfo from '../accountInfo/AccountInfo';
import AccountDetails from '../accountDetails/AccountDetails';

import './AccountSettings.scss';

const AccountSettings = () => {
  return (
    <section className='accountSettings'>
      <AccountInfo />
      <AccountDetails />
    </section>
  );
};

export default AccountSettings;
