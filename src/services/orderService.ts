import http from './httpService';

const apiEndpoint = '/orders';

export const getOrders = () => http.get(apiEndpoint);

export const getOrder = (orderId: string) =>
  http.get(`${apiEndpoint}/${orderId}`);

export const createOrder = <T extends object>(data: T) =>
  http.post('/api/orders', data);

export const updateOrder = <T extends object>(orderId: string, data: T) =>
  http.patch(`${apiEndpoint}/${orderId}`, data);

export const updatePaymentIntent = (paymentIntent: string | null) =>
  http.patch(`${apiEndpoint}/confirm/${paymentIntent}`);
