import RoomServiceIcon from '@mui/icons-material/RoomService';

import { cardMenus } from '@/data';
import ProductCard from '../productCard/ProductCard';

import './Menus.scss';

const Menus = () => {
  return (
    <section className='menusContainer'>
      <div className='container'>
        <div className='headings'>
          <h2 className='heading'>Popular menu</h2>
          <div className='box'>
            <div className='icon'>
              <RoomServiceIcon />
            </div>
          </div>
        </div>
        <div className='wrapper'>
          {cardMenus.map((menu) => {
            return <ProductCard key={menu.id} product={menu} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menus;
