import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post("http://134.209.110.22/api/auth/login", data);
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};
