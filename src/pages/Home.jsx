import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { login } from "../components/Login"; // Assumes `login` is a function making the API call

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await login(data); // Call the login API
      if (response?.data) {
        navigate("/dashboard"); // Navigate to the dashboard on success
      }
    } catch (error) {
      // Handle errors and set error messages
      setErrorMessage(error.response?.data?.error || "Login failed. Please try again.");
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
              htmlFor="email"
            >
              <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-red-600 after:ml-0.5">
                User ID
              </span>
              <input
                className="px-5 py-3 border rounded-lg w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                type="email"
                placeholder="User ID"
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
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          <div className="flex w-full my-10 text-center">
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
