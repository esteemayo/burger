'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import { useProductModal } from '@/hooks/useProductModal';

import './NewProduct.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface NewProductProps {
  isAdmin: Boolean | undefined;
}

const NewProduct = ({ isAdmin }: NewProductProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  const onOpen = useProductModal((state) => state.onOpen);

  const handleOpen = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (session) {
      onOpen();
      return;
    }
    return router.push('/login');
  }, []);

  if (!isAdmin) {
    return;
  }

  return (
    <div className='newProduct'>
      <button type='button' onClick={handleOpen}>
        <Image src='/svg/plus.svg' width={15} height={15} alt='plus icon' />
        Add new product
      </button>
    </div>
  );
};

export default NewProduct;
