// import { apiClient } from "./apiClient";
import axios from "axios";

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

export const transaktionAll = async () => {
  try {
    const response = await axios.get(
      "http://134.209.110.22/api/transaction/history?filter=week&start_date=2025-01-01"
    );
    return response.data.data; // Kembalikan data dari respons
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Lempar error agar bisa ditangani di komponen
  }
};
