import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Mulai dari tidak terlihat dan lebih kecil
        animate={{ opacity: 1, scale: 1 }} // Setelah di-mount, tampil dengan opacity penuh dan ukuran normal
        exit={{ opacity: 0, x: 100 }} // Saat di-unmount, keluar ke kanan
        transition={{ duration: 1 }} // Durasi animasi
        className="h-[100vh]" // Pastikan ini ada untuk membuat penuh layar
      >
        <Link to="/login">
          <div className="flex flex-col items-center justify-center h-full gap-5 bg-gradient-to-r from-green-400 via-green-200 to-green-600">
            <h1 className="text-4xl font-bold md:text-5xl animate-fadeInUp">
              Selamat Datang
            </h1>
            <img
              src="./assets/img/uika.png"
              alt="logo"
              className="w-48 transition duration-500 ease-in-out md:w-72 hover:scale-110"
            />
            <h2 className="text-3xl font-semibold animate-pulse">Parkir</h2>
            <h2 className="text-3xl font-semibold animate-pulse">
              Universitas Ibnu Khaldun
            </h2>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
