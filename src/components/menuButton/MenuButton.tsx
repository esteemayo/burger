'use client';

import { useAccountMenu } from '@/hooks/useAccountMenu';

import './MenuButton.scss';

const MenuButton = () => {
  const isOpen = useAccountMenu((store) => store.isOpen);
  const onToggle = useAccountMenu((store) => store.onToggle);

  return (
    <button type='button' className='menuButton' onClick={onToggle}>
      {!!isOpen ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 9h16.5m-16.5 6.75h16.5'
          />
        </svg>
      )}
      <span>Menu</span>
    </button>
  );
};

export default MenuButton;
