import { axiosInstance } from './axiosInstance.js';

// Type guard to check if error is an AxiosError
const isAxiosError = (error) => {
  return error instanceof Error && 'response' in error;
};

// Reusable error handling function
const handleApiError = (error) => {
  if (isAxiosError(error)) {
    // If it's an AxiosError, throw the response data or a formatted error
    const errorData = error.response?.data;
    if (errorData) {
      throw errorData;
    }
    // If no response data, create a structured error
    throw {
      type: 'apiError',
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText
    };
  }

  // For non-Axios errors, throw as-is
  throw error;
};

export const get = async (url, params = {}) => {
  try {
    const res = await axiosInstance.get(url, { params });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const res = await axiosInstance.post(url, data);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const put = async (url, data = {}) => {
  try {
    const res = await axiosInstance.put(url, data);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const del = async (url) => {
  try {
    const res = await axiosInstance.delete(url);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const patch = async (url, data = {}) => {
  try {
    const res = await axiosInstance.patch(url, data);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};
