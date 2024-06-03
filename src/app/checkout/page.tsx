import type { Metadata } from 'next';

import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Burger - Checkout page',
};

const Checkout = () => {
  return <CheckoutClient />
};

export default Checkout;
