import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post(
      "http://134.209.110.22/api/auth/login",
      data // Data untuk dikirimkan
    );
    console.log("Response:", response.data); // Tampilkan data respons
    return response; // Kembalikan respons jika berhasil
  } catch (error) {
    console.error("Error:", error.response?.data || error.message); // Tampilkan detail error
    throw error; // Lontarkan error agar bisa ditangani di tempat lain
  }
};
