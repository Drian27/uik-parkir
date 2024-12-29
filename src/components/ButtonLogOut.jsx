import { IoIosLogOut } from "react-icons/io";

import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const ButtonLogOut = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to go out?", // Judul pop-up
      imageUrl: "./assets/img/dashboard/logo-uika.png", // Path ke logo
      imageAlt: "Logo UIKA", // Alt text
      background: "#1a8765", // Warna background hijau
      color: "#fff", // Warna teks putih
      confirmButtonText: "Yes", // Teks tombol Yes
      cancelButtonText: "No", // Teks tombol No
      showCancelButton: true, // Menampilkan tombol batal
      buttonsStyling: false, // Matikan default styling SweetAlert2
      customClass: {
        popup: "rounded-xl bg-green-700",
        confirmButton:
          "px-4 py-2 border-2 mr-2 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-green-700 transition font-semibold", // Tombol Yes
        cancelButton:
          "px-4 py-2 border-2 ml-2 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-green-700 transition font-semibold", // Tombol No
      },
    });
  };
  return (
    <div
      onClick={handleLogout}
      className="flex justify-center items-center gap-2 text-white cursor-pointer"
    >
      <IoIosLogOut className="text-3xl" />
      <p>Log Out</p>
    </div>
  );
};

export default ButtonLogOut;
