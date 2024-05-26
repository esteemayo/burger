import http from './httpService';

export const getProducts = () => http.get('/api/products');

export const getFeaturedProducts = () =>
  http.get('/api/products?featured=true');
