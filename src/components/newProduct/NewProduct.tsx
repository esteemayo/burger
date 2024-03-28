'use client';

import Image from 'next/image';

import { useProductModal } from '@/hooks/useProductModal';

import './NewProduct.scss';

const NewProduct = () => {
  const onOpen = useProductModal((state) => state.onOpen);

  return (
    <div className='newProduct'>
      <button type='button' onClick={onOpen}>
        <Image src='/svg/plus.svg' width={15} height={15} alt='plus icon' />
        Add new product
      </button>
    </div>
  );
};

export default NewProduct;
