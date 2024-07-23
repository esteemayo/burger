import http from './httpService';

const apiEndpoint = '/orders';

export const getOrders = () => http.get('/api/orders');

export const getOrder = (orderId: string) => http.get(`/api/orders/${orderId}`);

export const createOrder = <T extends object>(data: T) =>
  http.post('/api/orders', data);

export const updateOrder = <T extends object>(orderId: string, data: T) =>
  http.patch(`/api/orders/${orderId}`, data);
