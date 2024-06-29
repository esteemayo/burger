export const userKey = 'userCredentials';

export const rememberKey = 'rememberUser';

export const excerpts = (str: string, count: number) => {
  if (str?.length > count) {
    str = str.substring(0, count).concat('...');
  }

  return str;
};

export const getFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(key)!);
  }
};

export const setToStorage = <T extends string, U>(
  key: T,
  value: U,
  options?: undefined
) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(
      key,
      JSON.stringify({ ...value, options })
    );
  }
};

export const removeFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key);
  }
};
