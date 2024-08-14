'use client';

import { toast } from 'react-toastify';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import Spinner from '../spinner/Spinner';

import { useStatus } from '@/hooks/useStatus';
import { useUpdateStatus } from '@/hooks/useUpdateStatus';

import { StatusFormProps } from '@/types';
import { validateStatusInput } from '@/validations/status';

const StatusForm = ({ actionId, status }: StatusFormProps) => {
  const { statusLists } = useStatus();
  const { mutate } = useUpdateStatus();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const status = input.value;

      const error = validateStatusInput(status, statusLists);
      if (error) {
        toast.error(error);
        input.value = '';
        return;
      }

      setIsLoading(true);

      setTimeout(() => {
        mutate({ actionId, status });

        form.reset();
        toast.success('Status updated!');

        setIsLoading(false);
      }, 3000);
    },
    [actionId, mutate]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder={status} />
      <button type='submit' disabled={isLoading}>
        {isLoading ? (
          <Spinner size={15} />
        ) : (
          <Image src='/img/edit.png' width={20} height={20} alt='edit icon' />
        )}
      </button>
    </form>
  );
};

export default StatusForm;
