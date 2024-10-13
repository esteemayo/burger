'use client';

import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';

import { useRecipient } from '@/hooks/useRecipientModal';
import { useCartStore } from '@/hooks/useCartStore';
import { useAddressModal } from '@/hooks/useAddressModal';

import Spinner from '../spinner/Spinner';
import { createOrder } from '@/services/orderService';

import './CheckoutInfo.scss';

const CheckoutInfo = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const recipientModal = useRecipient();
  const addressModal = useAddressModal();

  const products = useCartStore((store) => store.products);
  const reset = useCartStore((store) => store.reset);
  const totalPrice = useCartStore((store) => store.totalPrice);

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (!session) {
        router.push('/login');
        return;
      }

      setIsLoading(true);

      const newOrder = {
        price: totalPrice,
        products,
        status: 'not paid',
        userId: session?.user.id,
      };

      try {
        setTimeout(async () => {
          const { data, status } = await createOrder({ ...newOrder });

          if (status === 201) {
            router.push(`/payment/${data?.id}`);
            reset();
          }

          setIsLoading(false);
        }, 3000);
      } catch (err: unknown) {
        console.log(err);
      }
    },
    [products, reset, router, session, totalPrice]
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
              <span className='customerName'>
                {status === 'loading' ? (
                  <Skeleton width={120} height={10} />
                ) : (
                  session?.user.name
                )}
              </span>
              <span className='customerPhone'>
                {status === 'loading' ? (
                  <Skeleton width={120} height={10} />
                ) : (
                  session?.user.phone
                )}
              </span>
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
          <button
            type='button'
            disabled={products.length < 1 || !!isLoading}
            onClick={handleCheckout}
          >
            {!!isLoading ? <Spinner size={13} /> : 'Place your order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
