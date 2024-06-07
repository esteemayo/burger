import { ClipLoader } from 'react-spinners';

import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='container'>
        <ClipLoader size={100} color='#ff0018' />
      </div>
    </div>
  );
};

export default Loader;
