import Axios from 'axios';
import { toast } from 'react-toastify';

import logger from './logService';

const devEnv = process.env.NODE_ENV !== 'production';
const { DEV_API_URL, PROD_API_URL } = process.env;

const authFetch = Axios.create({
  baseURL: devEnv ? DEV_API_URL : PROD_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

authFetch.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status > 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An unexpected error occurred!');
  }

  return Promise.reject(error);
});

const http = {
  get: authFetch.get,
  post: authFetch.post,
  patch: authFetch.patch,
  delete: authFetch.delete,
};

export default http;
