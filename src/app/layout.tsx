import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Layout from '@/components/layout/Layout';

import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Burger',
  description: 'Juicy Burger',
  authors: [
    { name: 'Esteem Designs', url: 'https://www.esteemdesigns.com' },
    { name: 'Emmanuel Adebayo', url: 'https://www.devayo.com' },
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
