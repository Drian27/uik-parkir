import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

// icons
import { FaMotorcycle, FaCarSide } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiMiniWallet } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import ButtonLogOut from "../components/ButtonLogOut";

const Transaksi = () => {
  const [selectedFilter, setSelectedFilter] = useState("cash");
  // Data Transactions
  const transactions = [
    {
      name: "malik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Karyawan",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "dul",
      typeuser: "Karyawan",
      npm: "221135435",
      email: "dul@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "dul",
      typeuser: "Karyawan",
      npm: "221135435",
      email: "dul@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Karyawan",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Dosen",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Dosen",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Dosen",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Dosen",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Dosen",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "malik",
      typeuser: "Dosen",
      npm: "221135435",
      email: "ijal@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "dik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "dik@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "dik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "dik@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "dik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "dik@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
    {
      name: "dik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "dik@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.10.000",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col bg-background">
        {/* Header */}
        <div className="w-full flex items-center justify-between px-5 py-1 md:py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img
                src="./assets/img/dashboard/logo-uika.png"
                alt="logo-uika"
              />
            </div>
            <div className="text-white leading-tight">
              <p className="md:text-xl font-light">Abdul Murudul</p>
              <p className="md:text-sm text-xs font-[800]">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm md:text-2xl font-bold text-white">TRANSACTIONS</h1>
          <ButtonLogOut />
        </div>

        {/* Income */}
        <div className="flex justify-between my-5">
          <div className="bg-gray-200 text-gray-500 rounded-md gap-2 px-2 flex items-center">
            <p className="font-medium">29 Oktober 2024</p>
            <IoCalendar className="text-xl mb-0.5" />
          </div>
          <div className="flex bg-transparent items-center border rounded-lg px-2 border-gray-300 border-1">
            <CiSearch className="text-3xl" />
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md flex-grow focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-white flex items-center p-3 gap-3 border border-gray-200 border-1 rounded-lg">
            <p className="bg-green-200 text-primary text-2xl rounded-full p-4">Rp</p>
            <div>
              <p className="text-xs text-gray-400">Total Income</p>
              <p className="text-xl font-black">Rp.3.000.000</p>
            </div>
          </div>
          <div>
            {/* Displaying content based on selected filter */}
            <div className="bg-white flex items-center p-3 gap-3 border border-gray-200 border-1 rounded-lg">
              <div className="bg-green-200 text-primary flex justify-center items-center rounded-full">
                <HiMiniWallet className="text-6xl p-4" />
              </div>
              <div>
                <div className="text-xs text-gray-400 flex gap-1">
                  <p>Total</p>
                  <button
                    onClick={() => setSelectedFilter("cash")}
                    className={`font-medium ${
                      selectedFilter === "cash" ? "text-primary underline" : "text-gray-400"
                    }`}
                  >
                    Cash
                  </button>
                  <p>or</p>
                  <button
                    onClick={() => setSelectedFilter("non-cash")}
                    className={`font-medium ${
                      selectedFilter === "non-cash" ? "text-primary underline" : "text-gray-400"
                    }`}
                  >
                    Non-Cash
                  </button>
                </div>
                <button className="text-xl font-black">
                  {selectedFilter === "cash" ? "Rp.500.000" : "Rp.250.000"}
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center p-3 gap-3 border border-gray-200 border-1 rounded-lg">
            <div className="bg-green-200 text-primary flex justify-center items-center rounded-full">
              <FaMotorcycle className="text-6xl p-4" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Income Motorcycle</p>
              <p className="text-xl font-black">Rp.1.500.000</p>
            </div>
          </div>
          <div className="bg-white flex items-center p-3 gap-3 border border-gray-200 border-1 rounded-lg">
            <div className="bg-red-50 text-secondary flex justify-center items-center rounded-full">
              <FaCarSide className="text-6xl p-4" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Income Car</p>
              <p className="text-xl font-black">Rp.1.500.000</p>
            </div>
          </div>
        </div>

        {/* Table Transactions */}
        <div className="overflow-auto rounded-lg shadow-lg my-5 border border-gray-200">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-sm font-semibold py-2 px-4 text-left">Name</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Type User</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">NIP/NPM</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Email</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Vehicle</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Date</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Payment</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">In</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Out</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.name}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.typeuser}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.npm}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.email}</td>
                  <td className="text-sm text-gray-700 py-3 px-4 flex items-center gap-2">
                    {/* Conditionally render icon based on vehicle type */}
                    {transaction.vehicle === "motor" ? (
                      <div className="bg-green-100 rounded-xl p-2">
                        <FaMotorcycle className="text-primary text-base" />
                      </div>
                    ) : (
                      <div className="bg-[#FFF4DE] rounded-xl p-2">
                        <FaCarSide className="text-yellow-300 text-base" />
                      </div>
                    )}
                    {transaction.vehicle}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.date}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.payment}</td>
                  <td className="text-sm text-primary py-3 px-4">{transaction.in}</td>
                  <td className="text-sm text-red-700 py-3 px-4">{transaction.out}</td>
                  <td className="text-sm text-gray-700 py-3 px-4 font-semibold">
                    {transaction.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
