import http from './httpService';

const apiEndpoint = '/auth';

export const registerUser = <T extends object>(credentials: T) =>
  http.post(`${apiEndpoint}/register`, credentials);
