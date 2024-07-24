import PaymentForm from '@/components/paymentForm/PaymentForm';

import './Payment.scss';

interface IParams {
  params: {
    id: string;
  };
}

const Payment = ({ params }: IParams) => {
  const { id: orderId } = params;

  return <PaymentForm orderId={orderId} />;
};

export default Payment;
