import Image from 'next/image';

import './NewProduct.scss';

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <button type='button'>
        <Image src='/svg/plus.svg' width={15} height={15} alt='plus icon' />
        Add new product
      </button>
    </div>
  );
};

export default NewProduct;
