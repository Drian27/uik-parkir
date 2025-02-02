import axios from "axios";

export const transaktionAll = async () => {
  try {
    const response = await axios.get(
      "https://api-photobooth.com:8081/api/transaction/history?filter=week&start_date=2025-01-01"
    );
    const transactions = response.data.data;

    return transactions; // Mengembalikan data transaksi
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Lempar error untuk ditangani di komponen
  }
};
