import http from './httpService';

export const getUser = (userId: string) => http.get(`/api/users/${userId}`);

export const updateUserData = <T extends object>(userId: string, data: T) =>
  http.patch(`/api/users/${userId}`, data);

export const deleteUser = (userId: string) =>
  http.delete(`/api/users/delete-me/${userId}`);
