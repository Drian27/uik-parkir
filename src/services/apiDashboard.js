import https from 'https';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://134.209.110.22',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    config.validateStatus = () => true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    }
    return response;
  },
  (error) => {
    if (error.code === 'ECONNREFUSED') {
      throw new Error('Connection Refused');
    }
    if (error.response?.status === 403) {
      throw new Error('Forbidden');
    }
    if (error.response?.status === 503) {
      throw new Error('Service Unavailable');
    }
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  try {
    const response = await apiClient.post('/api/auth/login', data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const dashboard = async () => {
  try {
    const response = await apiClient.get(
      '/api/transaction/summary',
      {
        params: {
          filter: 'week',
          start_date: '2025-01-14',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Dashboard error:', error);
    throw error;
  }
};
