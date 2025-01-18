import React from "react";

// icons
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const Customer = () => {
  const data = [
    {
      kendaraan: "Motor",
      subject: "Mahasiswa",
      npm_nip: "221143848",
      tanggal: "7/9/2024",
      masuk: "12.00",
      keluar: "14.00",
      status: "Active",
    },
    {
      kendaraan: "Motor",
      subject: "Mahasiswa",
      npm_nip: "221143848",
      tanggal: "7/9/2024",
      masuk: "12.00",
      keluar: "14.00",
      status: "Active",
    },
    {
      kendaraan: "Motor",
      subject: "Dosen",
      npm_nip: "221143848",
      tanggal: "7/9/2024",
      masuk: "12.00",
      keluar: "14.00",
      status: "Active",
    },
    {
      kendaraan: "Mobil",
      subject: "Mahasiswa",
      npm_nip: "221143848",
      tanggal: "7/9/2024",
      masuk: "12.00",
      keluar: "14.00",
      status: "Active",
    },
    {
      kendaraan: "Mobil",
      subject: "Dosen",
      npm_nip: "221143848",
      tanggal: "7/9/2024",
      masuk: "12.00",
      keluar: "14.00",
      status: "Active",
    },
    {
      kendaraan: "Mobil",
      subject: "Dosen",
      npm_nip: "221143848",
      tanggal: "7/9/2024",
      masuk: "12.00",
      keluar: "14.00",
      status: "Active",
    },
  ];

  return (
    <div className="my-5 overflow-scroll">
      <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-primary text-white rounded-lg">
            <th className="px-4 py-2">Vehicle</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">NPM/NIP</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">In</th>
            <th className="px-4 py-2">Out</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-center`}
            >
              <td className="px-4 py-2 flex justify-center items-center">
                <span
                  className={`mr-2 text-xl ${
                    item.kendaraan === "Motor" ? "text-primary" : "text-yellow-500"
                  }`}
                >
                  {item.kendaraan === "Motor" ? <FaMotorcycle /> : <FaCarSide />}
                </span>
                {item.kendaraan}
              </td>
              <td className="px-4 py-2">{item.subject}</td>
              <td className="px-4 py-2">{item.npm_nip}</td>
              <td className="px-4 py-2">{item.tanggal}</td>
              <td className="px-4 py-2">{item.masuk}</td>
              <td className="px-4 py-2">{item.keluar}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-md text-sm ${
                    item.status === "Active" ? "bg-primary text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
