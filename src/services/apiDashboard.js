import axios from 'axios';

export const dashboard = async () => {
  try {
    const response = await axios.get(
      'https://api-photobooth.com:8081/api/transaction/summary?filter=week&start_date=2025-01-14'
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
