'use client';

import { toast } from 'react-toastify';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { StatusFormProps } from '@/types';
import { updateOrder } from '@/services/orderService';

const StatusForm = ({ actionId, status }: StatusFormProps) => {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const status = input.value;

      if (input.value.length < 1) {
        toast.error('Status must not be empty');
        return;
      }

      try {
        await updateOrder(actionId, { status });

        form.reset();
        toast.success('Status updated!');
        router.refresh();
      } catch (err: unknown) {
        console.log(err);
      }
    },
    [actionId, router]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder={status} />
      <button type='submit'>
        <Image src='/img/edit.png' width={20} height={20} alt='edit icon' />
      </button>
    </form>
  );
};

export default StatusForm;
