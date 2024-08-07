import http from './httpService';

const apiEndpoint = '/products';

const productUrl = (productId: string) => `${apiEndpoint}/${productId}`;

export const getProducts = () => http.get('/api/products');

export const getFeaturedProducts = () =>
  http.get('/api/products?featured=true');

export const searchProducts = (searchQuery: string, page: number) =>
  http.get(`/api/products/search?q=${searchQuery}&page=${page}`);

export const getRelatedProducts = (ingredients: string[] | undefined) =>
  http.get(`/api/products/ingredients?ingredients=${ingredients}`);

export const getReviewsOnProduct = (productId: string) =>
  http.get(`/api/products/${productId}/reviews`);

export const getProductClient = (productId: string) =>
  http.get(`/api/products/${productId}`);

export const getProductServer = (productId: string) =>
  http.get(productUrl(productId));

export const createProduct = <T extends object>(data: T) =>
  http.post('/api/products', data);

export const likeProduct = (productId: string) =>
  http.patch(`/api/products/like/${productId}`);

export const createReviewOnProduct = <T extends object>(
  data: T,
  productId: string
) => http.post(`/api/products/${productId}/reviews`, data);
