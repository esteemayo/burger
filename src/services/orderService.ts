import http from './httpService';

const apiEndpoint = '/orders';

export const getOrders = () => http.get(apiEndpoint);

export const getOrder = (orderId: string) =>
  http.get(`${apiEndpoint}/${orderId}`);
