export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/checkout',
    '/orders',
    '/order/:id',
    '/payment/:id',
    '/profile',
    '/success',
  ],
};
