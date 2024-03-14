import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { cardMenus } from '@/data';
import MenuCard from '../menuCard/MenuCard';

import './Menus.scss';

const Menus = () => {
  return (
    <section className='menusContainer'>
      <div className='container'>
        <div className='headings'>
          <h2 className='heading'>Popular menu</h2>
          <div className='box'>
            <div className='left'>
              <span className='line'>&nbsp;</span>
              <span className='line'>&nbsp;</span>
            </div>
            <div className='icon'>
              <LocalDiningIcon />
            </div>
            <div className='right'>
              <span className='line'>&nbsp;</span>
              <span className='line'>&nbsp;</span>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          {cardMenus.map((menu) => {
            return <MenuCard key={menu.id} {...menu} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menus;
