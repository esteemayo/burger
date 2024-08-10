'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

import { useProductModal } from '@/hooks/useProductModal';

import './NewProduct.scss';

interface NewProductProps {
  isAdmin: Boolean | undefined;
}

const NewProduct = ({ isAdmin }: NewProductProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  const onOpen = useProductModal((state) => state.onOpen);

  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (session) {
        onOpen();
        return;
      }
      return router.push('/login');
    },
    [onOpen, router, session]
  );

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
