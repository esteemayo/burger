'use client';

import Image from 'next/image';

import { useProductModal } from '@/hooks/useProductModal';

import './NewProduct.scss';

interface NewProductProps { 
  isAdmin: Boolean | undefined;
}

const NewProduct = ({ isAdmin }: NewProductProps) => {
  const onOpen = useProductModal((state) => state.onOpen);

  if (!isAdmin) {
    return;
  }

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
