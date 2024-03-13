import LocalDiningIcon from '@mui/icons-material/LocalDining';

import './Menus.scss';

const Menus = () => {
  return (
    <section className='menus'>
      <div className='container'>
        <div className='headings'>
          <h2 className='heading'>Popular menu</h2>
          <div className='box'>
            <span className='left'>&nbsp;</span>
            <div className='icon'>
              <LocalDiningIcon />
            </div>
            <span className='right'>&nbsp;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
