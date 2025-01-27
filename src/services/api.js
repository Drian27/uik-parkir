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
      'http://134.209.110.22/api/auth/login',
      data
    );
    return response;
  } catch (error) {
    throw error;
  }
};
