import https from 'https';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://134.209.110.22/',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  timeout: 10000,
});

apiClient.interceptors.push({
  request: (config) => {
    config.validateStatus = () => true;
    return config;
  },
});

apiClient.interceptors.push({
  response: (response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    }
    return response;
  },
  error: (error) => {
    if (error.code === 'ECONNREFUSED') {
      throw new Error('Connection Refused');
    }
    if (error.response?.status === 403) {
      throw new Error('Forbidden');
    }
    if (error.response?.status === 503) {
      throw new Error('Service Unavailable');
    }
    throw error;
  },
});

export const login = async (data) => {
  try {
    const response = await apiClient.post('/api/auth/user/show-all', data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
