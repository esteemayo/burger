export const rememberKey = 'rememberUser';

export const getFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key)!);
  }
};
