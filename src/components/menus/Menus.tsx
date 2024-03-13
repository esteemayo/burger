import LocalDiningIcon from '@mui/icons-material/LocalDining';

import './Menus.scss';

const Menus = () => {
  return (
    <section className='menus'>
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
      </div>
    </section>
  );
};

export default Menus;
