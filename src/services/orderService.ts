import http from './httpService';

const apiEndpoint = '/orders';

export const getOrders = () => http.get(apiEndpoint);

export const getOrder = (orderId: string) =>
  http.get(`${apiEndpoint}/${orderId}`);

export const createOrder = <T extends object>(data: T) =>
  http.post('/api/orders', data);
