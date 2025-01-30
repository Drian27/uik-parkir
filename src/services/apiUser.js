import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://134.209.110.22/api/auth/user/show-all");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
