'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import { AccountCardProps } from '@/types';
import { useAccountMenu } from '@/hooks/useAccountMenu';

import './AccountCard.scss';

const AccountCard = ({ icon, count, price, label }: AccountCardProps) => {
  const isOpen = useAccountMenu((state) => state.isOpen);

  const cardClasses = useMemo(() => {
    return isOpen ? 'accountCard toggle' : 'accountCard';
  }, [isOpen]);

  return (
    <article className={cardClasses}>
      <div className='statsWrap'>
        <h2>{count ?? price}</h2>
        <span>{label}</span>
      </div>
      <div className='accountIconWrap'>
        <Image src={icon} width={22.5} height={22.5} alt='' />
      </div>
    </article>
  );
};

export default AccountCard;
