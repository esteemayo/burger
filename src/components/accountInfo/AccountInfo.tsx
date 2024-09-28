import { widgets } from '@/data';
import Widget from '../widget/Widget';

import './AccountInfo.scss';

const AccountInfo = () => {
  return (
    <div className='accountInfo'>
      {widgets.map((item) => {
        return <Widget key={item.id} {...item} />;
      })}
    </div>
  );
};

export default AccountInfo;
