import { accountCards } from '@/data';
import AccountCard from '../accountCard/AccountCard';

import './AccountInfo.scss';

const AccountInfo = () => {
  return (
    <div className='accountInfo'>
      {accountCards.map((item) => {
        return <AccountCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default AccountInfo;
