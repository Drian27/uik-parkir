import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { login } from "../components/Login";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await login(data); // Asumsikan login API mengembalikan token
      if (response?.data?.token) {
        localStorage.setItem("authToken", response.data.token); // Simpan token
        console.log("Token berhasil disimpan:", response.data.token); // Debug
        navigate("/dashboard", { replace: true }); // Arahkan ke dashboard
      } else {
        console.error("Login gagal, token tidak diterima.");
      }
    } catch (error) {
      console.error("Kesalahan saat login:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[100vh] bg-gray-100">
      <div className="relative bg-primary md:rounded-r-2xl">
        <img
          src="./assets/img/login/bg.png"
          alt="bg"
          className="md:absolute inset-0 md:h-full md:w-full rounded-3xl"
        />
        <img
          src="./assets/img/login/parkir.png"
          alt="parkir"
          className="w-40 pt-5 ml-6 top-32 md:w-80 lg:ml-32 lg:top-20 absolute inset-1 md:top-36 md:-left-10"
        />
        <img
          src="./assets/img/login/human.png"
          alt="human"
          className="absolute inset-2 lg:left-32 md:ml-10 w-[80%] top-32 ml-10 lg:top-32 md:w-96 md:top-64"
        />
      </div>
      <div className="m-auto">
        <img
          src="./assets/logo.png"
          alt="logo"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm text-gray-700"
              htmlFor="username"
            >
              <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-red-600 after:ml-0.5">
                username
              </span>
              <input
                className="px-5 py-3 border rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                type="text"
                placeholder="User ID"
                name="username"
                id="username"
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
                  className="px-5 py-3 border rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  name="password"
                  id="password"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              required
              className="w-4"
            />
            <p className="font-light text-sm">Remember me?</p>
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <div className="flex w-full mt-2 text-center">
            <button
              type="submit"
              className="w-full py-3 text-white transition duration-300 ease-in-out bg-primary rounded-lg font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
