import http from './httpService';

const apiEndpoint = '/reviews';

export const createReview = <T extends object>(data: T, productId: string) =>
  http.post(`/api/reviews/${productId}`);
