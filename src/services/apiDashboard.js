import axios from 'axios';

export const dashboard = async () => {
  try {
    const response = await axios.get(
      'http://134.209.110.22/api/transaction/summary?filter=week&start_date=2025-01-14'
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
