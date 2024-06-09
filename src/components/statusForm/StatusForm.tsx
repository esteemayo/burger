import { useCallback } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

import { updateOrder } from '@/services/orderService';

const StatusForm = ({ actionId, status, orderStatus }) => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const status = input.value;

      try {
        const { data } = await updateOrder(actionId, { status });
        console.log(data);

        form.reset();
        toast.success("Changed order's status");
      } catch (err: unknown) {
        console.log(err);
      }
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder={orderStatus(status)} />
      <button type='submit'>
        <Image src='/img/edit.png' width={20} height={20} alt='edit icon' />
      </button>
    </form>
  );
};

export default StatusForm;
