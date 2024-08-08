'use client';

import Image from 'next/image';

import { AccountAvatarProps } from '@/types';

const AccountAvatar = ({ file, avatar, onChange }: AccountAvatarProps) => {
  return (
    <div className='accountAvatar'>
      <div className='dataImg'>
        <Image
          src={file ? URL.createObjectURL(file as Blob | MediaSource) : avatar}
          width={50}
          height={50}
          alt='avatar'
          className='userAvatar'
        />
        <label htmlFor='file'>
          <Image
            src='/svg/pencil.svg'
            width={17}
            height={17}
            alt='pencil icon'
            className='icon'
          />
        </label>
        <input id='file' name='file' type='file' onChange={onChange} />
      </div>
    </div>
  );
};

export default AccountAvatar;
