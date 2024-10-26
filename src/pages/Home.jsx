import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Fungsi untuk toggle (beralih) antara terlihat dan tersembunyi
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] bg-gray-100">
      <div className="relative bg-primary md:rounded-r-2xl">
        <img
          src="./assets/img/login/bg.png"
          alt="bg"
          className="md:absolute inset-0 md:h-full md:w-full rounded-3xl"
        />
        <img
          src="./assets/img/login/parkir.png"
          alt="parkir"
          className="w-40 pt-5 ml-6 top-32 md:w-80 md:ml-32 md:top-20 absolute inset-1"
        />
        <img
          src="./assets/img/login/human.png"
          alt="human"
          className="absolute inset-2 md:left-32 md:ml-32 w-[80%] top-32 ml-10 md:top-0"
        />
      </div>
      <div className="m-auto">
        <img
          src="./assets/logo.png"
          alt="logo"
        />
        <form>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm text-gray-700"
              htmlFor="email"
            >
              <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-red-600 after:ml-0.5">
                Email
              </span>
              <input
                className="px-5 py-3 border rounded-full w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                id="email"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm text-gray-700"
              htmlFor="password"
            >
              <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-red-600 after:ml-0.5">
                Password
              </span>
              <div className="relative w-full">
                <input
                  className="px-5 py-3 border rounded-full w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                  type={showPassword ? "text" : "password"} // Menampilkan teks jika showPassword true
                  placeholder="**********"
                  name="password"
                  id="password"
                  required
                />
                {/* Ikon yang bisa diklik untuk toggle password */}
                <span
                  onClick={togglePasswordVisibility} // Event klik untuk toggle
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {/* Ganti ikon berdasarkan state */}
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </label>
          </div>
          <div className="flex w-full mt-10 text-center">
            <Link
              to="/dashboard"
              type="submit"
              className="w-full py-3 text-white transition duration-300 ease-in-out bg-gradient-to-r from-primary to-[#BEDC7CFC] rounded-full font-semibold"
            >
              Masuk
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
