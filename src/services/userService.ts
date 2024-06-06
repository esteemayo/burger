import http from './httpService';

export const getUser = (userId: string) => http.get(`/api/users/${userId}`);
