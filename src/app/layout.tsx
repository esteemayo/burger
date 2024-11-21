import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Layout from '@/components/layout/Layout';
import QueryProvider from '@/providers/QueryProvider';

import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Burgers. App | Burger Ordering | Online Burger Delivery',
  description:
    'Order burger online from local restaurants with Burgers. Get delivery or pickup from your favorite eateries. Order your burger with Burgers App. Get delivery or pickup from this local favorite.',
  keywords: 'burger ordering, online burger ordering',
  authors: [
    { name: 'Xsteem Designx', url: 'https://www.esteemdesigns.com' },
    { name: 'Emmanuel Ayodeji Adebayo', url: 'https://www.devayo.com' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <QueryProvider>
          <Layout>{children}</Layout>
        </QueryProvider>
      </body>
    </html>
  );
}
