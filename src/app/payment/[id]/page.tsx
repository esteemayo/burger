import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '@/components/checkoutForm/CheckoutForm';

import './Payment.scss';

const stripePromise = loadStripe(
  'pk_test_51PMC1YLjKbhA4Yjg89VxYW1rFYaqbOZ3TQqbc4AtBY0PMnQzwJAad7eOBO1HWFbSgrHY1E0MpqQvx94jrZhvx2Bq00jwNTSLcT'
);

const Payment = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <div className='payment'>
      <div className='container'>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
