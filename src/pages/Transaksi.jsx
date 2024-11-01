import React from "react";
import Sidebar from "../components/Sidebar";

// icons
import { FaMotorcycle, FaCarSide } from "react-icons/fa";

const Transaksi = () => {
  // Data Transactions
  const transactions = [
    {
      vehicle: "motor",
      subject: "Mahasiswa",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Mahasiswa",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Karyawan",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "mobil",
      subject: "Karyawan",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "mobil",
      subject: "Karyawan",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Karyawan",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Dosen",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Dosen",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Dosen",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Dosen",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Dosen",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "motor",
      subject: "Dosen",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "mobil",
      subject: "Mahasiswa",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "mobil",
      subject: "Mahasiswa",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "mobil",
      subject: "Mahasiswa",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
    {
      vehicle: "mobil",
      subject: "Mahasiswa",
      npm: "221135435",
      date: "7/11/2024",
      in: "12.00",
      out: "14.00",
      transactions: "10.000",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col bg-background">
        {/* Header */}
        <div className="w-full flex items-center justify-between px-5 py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <h1 className="text-xl md:text-2xl font-bold text-white">TRANSACTIONS</h1>
          <div className="flex justify-center items-center gap-2">
            <div className="text-end text-white leading-tight">
              <p className="text-xl font-light">Abdul Murudul</p>
              <p className="text-sm font-[800]">Super Admin</p>
            </div>
            <div>
              <img
                src="./assets/img/dashboard/logo-uika.png"
                alt="logo-uika"
              />
            </div>
          </div>
        </div>

        {/* Table Transactions */}
        <div className="overflow-auto rounded-lg shadow-lg my-5 border border-gray-200">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-sm font-semibold py-2 px-4 text-left">Vehicle</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Subject</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">NPM/NIP</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Date</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">In</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Out</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Transactions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100"
                >
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
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.subject}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.npm}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.date}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.in}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.out}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.transactions}</td>
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
