import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(
      'https://api-photobooth.com:8081/api/auth/login',
      data
    );
    return response;
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.error('Connection refused:', error.message);
      throw new Error('Unable to connect to the server.');
    }
    throw error;
  }
};
