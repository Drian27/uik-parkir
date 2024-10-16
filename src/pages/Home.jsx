import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] bg-gray-100">
      <div className="bg-primary relative">
        <img
          src="./assets/img/login/human.png"
          alt="human"
          className="absolute inset-0 w-56 left-32 md:w-[580px] md:ml-20"
        />
        <img
          src="./assets/img/login/parkir.png"
          alt="parkir"
          className="w-40 pt-5 ml-16 md:w-80 md:ml-32 md:pt-28"
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
              Email address
            </label>
            <input
              className="w-full px-5 py-3 md:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-0"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-5 py-3 md:py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-0"
              type="password"
              placeholder="**********"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="flex w-full mt-10 text-center">
            <Link
              to="/dashboard"
              type="submit"
              className="w-full py-2 text-white transition duration-300 ease-in-out bg-gradient-to-r from-primary to-[#BEDC7CFC] rounded-full font-semibold"
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
