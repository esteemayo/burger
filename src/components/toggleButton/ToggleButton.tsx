import Image from 'next/image';

import { ToggleButtonProps } from '@/types';

import './ToggleButton.scss';

const ToggleButton = ({ isOpen, onToggle }: ToggleButtonProps) => {
  return (
    <button type='button' className='toggleButton' onClick={onToggle}>
      {isOpen ? (
        <Image src='/svg/times.svg' width={15} height={15} alt='close icon' />
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
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleButton;
