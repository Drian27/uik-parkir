import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://api-photobooth.com:8081/api/auth/user/show-all");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
