'use client';

import { useAccountMenu } from '@/hooks/useAccountMenu';

import './MenuButton';

const MenuButton = () => {
  const isOpen = useAccountMenu((state) => state.isOpen);
  const onToggle = useAccountMenu((state) => state.toggle);

  return (
    <button className='toggleBtn' type='button' onClick={onToggle}>
      {!!isOpen ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-5'
        >
          <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-5'
        >
          <path
            fillRule='evenodd'
            d='M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </button>
  );
};

export default MenuButton;
