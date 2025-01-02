import { apiClient } from "./apiClient";

// Fungsi untuk mengambil data pengguna
export const getUsers = async () => {
  try {
    const response = await apiClient.get("/users"); // Data untuk di ambil
    return response.data; // Data pengguna dari API
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Melempar error untuk ditangani di komponen
  }
};
