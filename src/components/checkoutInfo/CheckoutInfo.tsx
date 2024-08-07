'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';

import { useRecipient } from '@/hooks/useRecipientModal';
import { useCartStore } from '@/hooks/useCartStore';
import { useAddressModal } from '@/hooks/useAddressModal';

import { createOrder } from '@/services/orderService';

import './CheckoutInfo.scss';

const CheckoutInfo = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const recipientModal = useRecipient();
  const addressModal = useAddressModal();

  const products = useCartStore((store) => store.products);
  const totalPrice = useCartStore((store) => store.totalPrice);

  const handleCheckout = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (!session) {
        router.push('/login');
        onClose();
        return;
      }

      const newOrder = {
        price: totalPrice,
        products,
        status: 'not paid',
        userId: session?.user.id,
      };

      try {
        const { data } = await createOrder({ ...newOrder });
        router.push(`/payment/${data?.id}`);
      } catch (err: unknown) {
        console.log(err);
      }
    },
    [products, router, session, totalPrice]
  );

  return (
    <div className='checkoutInfo'>
      <div className='checkoutInfoWrap'>
        <div className='checkoutUserSection'>
          <div className='checkoutInfoContainer'>
            <div className='checkoutInfoBox'>
              <h3 className='checkoutInfoHeading'>Review and place order</h3>
            </div>
            <h6 className='addressHeading'>
              Review/Add address and fulfill payments to complete your purchase
            </h6>
            <hr />
            <h6 className='recipientHeading'>Recipient information</h6>
            <div className='customerInfo'>
              <span className='customerName'>{session?.user.name}</span>
              <span className='customerPhone'>{session?.user.phone}</span>
            </div>
            <button
              onClick={recipientModal.onOpen}
              type='button'
              className='recipientBtn'
            >
              Change recipient
            </button>
            <hr />
            <h6 className='deliveryHeading'>Delivery Address</h6>
            <button
              onClick={addressModal.onOpen}
              type='button'
              className='deliveryBtn'
            >
              Add delivery address
            </button>
            <hr />
          </div>
        </div>
        <div className='paymentSection'>
          <button type='button' onClick={handleCheckout}>
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
