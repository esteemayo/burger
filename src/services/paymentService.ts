import http from './httpService';

export const makePayment = (orderId: string) =>
  http.post(`/api/create-intent/${orderId}`);

export const updatePaymentIntent = (paymentIntent: string | null) =>
  http.patch(`/confirm/${paymentIntent}`);
