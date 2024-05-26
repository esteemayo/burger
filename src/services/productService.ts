import http from './httpService';

const apiEndpoint = '/products';

export const getProducts = () => http.get('/api/products');

export const getFeaturedProducts = () =>
  http.get('/api/products?featured=true');

export const getProduct = (productId: string) =>
  http.get(`${apiEndpoint}/${productId}`);
