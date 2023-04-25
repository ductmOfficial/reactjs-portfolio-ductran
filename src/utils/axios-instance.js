import axios from 'axios';

// project imports
import config from 'config';
import { getTokenFromStorage } from 'utils/auth';

export const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  params: {
    api_key: config.apiKey,
    language: 'vi-VN',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default instance;
