import http from './httpService';

const apiEndpoint = '/api/orders';

const orderUrl = (orderId: string) => `${apiEndpoint}/${orderId}`;

export const getOrders = () => http.get(apiEndpoint);

export const getOrder = (orderId: string) => http.get(`${apiEndpoint}${orderId}`);

export const getOrderByIntent = (intentId: string | null) =>
  http.get(`${apiEndpoint}/details/${intentId}`);

export const createOrder = <T extends object>(data: T) => http.post(apiEndpoint, data);

export const updateOrder = <T extends object>(orderId: string, data: T) =>
  http.patch(`${apiEndpoint}/${orderId}`, data);
