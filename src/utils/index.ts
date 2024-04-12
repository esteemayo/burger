export const rememberKey = 'rememberUser';

export const getFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key)!);
  }
};

export const setToStorage = <T extends string, U>(key: T, value: U) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key);
  }
};
