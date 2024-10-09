import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Start small and transparent
      animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
      exit={{ opacity: 0, scale: 0.5 }} // Scale down and fade out
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Animation settings
    >
      <div className="relative flex items-center justify-center h-[100vh] bg-gray-100">
        <img
          src="./assets/img/bg-login.jpg"
          alt=""
          className="object-cover w-full h-full blur-sm"
        />
        <div className="bg-white absolute inset-0 p-8 m-auto h-96  rounded-lg shadow-md w-[400px] hover:shadow-xl hover:shadow-green-600 transition duration-300 shadow-green-700">
          <h2 className="mb-6 text-3xl font-bold text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                type="email"
                placeholder="Masukan email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                type="password"
                placeholder="Masukan password"
                name="password"
                id="password"
                required
              />
            </div>
            <div className="flex w-full mt-10 text-center">
              <Link
                to="/dashboard"
                type="submit"
                className="w-full py-2 text-white transition duration-300 ease-in-out bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
