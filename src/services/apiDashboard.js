import axios from "axios";

export const dashboard = async () => {
  try {
    const response = await axios.get(
      "http://134.209.110.22/api/transaction/summary?filter=week&start_date=2025-01-01"
    );
    return response.data; // Kembalikan data dari respons
  } catch (error) {
    console.error("Error:", error);
    throw error; // Lempar error agar bisa ditangani di komponen
  }
};
