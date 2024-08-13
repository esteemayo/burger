'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Spinner from '../spinner/Spinner';

import { StatusFormProps } from '@/types';
import { updateOrder } from '@/services/orderService';

const StatusForm = ({ actionId, status }: StatusFormProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async ({
      actionId,
      status,
    }: {
      actionId: string;
      status: string;
    }) => {
      const { data } = await updateOrder(actionId, { status });
      return data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  const [isLoading, setIsLoading] = useState(false);

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

      setIsLoading(true);

      setTimeout(() => {
        mutate({ actionId, status });
  
        form.reset();
        toast.success('Status updated!');
        router.refresh();

        setIsLoading(false);
      }, 3000);
    },
    [actionId, mutate, router]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder={status} />
      <button type='submit' disabled={isLoading}>
        {true ? (
          <Spinner size={15} />
        ) : (
          <Image src='/img/edit.png' width={20} height={20} alt='edit icon' />
        )}
      </button>
    </form>
  );
};

export default StatusForm;
