import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

const BASE_URL = 'https://api.punkapi.com';

export const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

(function createAxiosInterceptor() {
  instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => Promise.reject(error?.response?.data || error.toString()),
  );
})();
