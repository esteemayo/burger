import http from './httpService';

const apiEndpoint = '/auth';

export const registerUser = <T extends object>(credentials: T) =>
  http.post(`/api/auth/register`, credentials);

export const updatePassword = <T extends object>(
  userId: string,
  credentials: T
) => http.patch(`/api/auth/update-my-password/${userId}`, credentials);
