import https from 'https';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://134.209.110.22',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const login = async (data) => {
  try {
    const response = await apiClient.post('/api/auth/login', data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
