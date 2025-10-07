import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add credentials include
axiosInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
