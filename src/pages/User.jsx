import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";

// icons
import { CiSearch } from "react-icons/ci";
import {
  FaCar,
  FaCarSide,
  FaChevronDown,
  FaCirclePlus,
  FaMotorcycle,
  FaPlus,
} from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";

const User = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [popUpVehicle, setPopUpVehicle] = useState();
  const popupRef = useRef(null);

  // PopUp Action
  const handlePopupToggle = (index) => {
    if (activePopup === index) {
      setActivePopup(null); // Menutup popup jika sudah terbuka
    } else {
      setActivePopup(index); // Membuka popup untuk pengguna yang diklik
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null); // Menutup popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // PopUp Vehicle
  const handlePopUpVehicle = (index) => {
    if (popUpVehicle === index) {
      setPopUpVehicle(null);
    } else {
      setPopUpVehicle(index);
    }
  };

  useEffect(() => {
    const handleOutVehicle = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopUpVehicle(null);
      }
    };

    document.addEventListener("mousedown", handleOutVehicle);
    return () => {
      document.removeEventListener("mousedown", handleOutVehicle);
    };
  }, []);

  const users = [
    {
      name: "malik",
      subject: "Mahasiswa",
      faculty: "Engineering and science",
      vehicle: "F 4638 G",
      email: "jal@gmail.com",
      nip: "221135435",
      balance: "10.000",
      status: "Active",
    },
    {
      name: "jal",
      subject: "Mahasiswa",
      faculty: "Engineering and science",
      vehicle: "F 4638 G",
      email: "jal@gmail.com",
      nip: "221135435",
      balance: "10.000",
      status: "Active",
    },
    {
      name: "jal",
      subject: "Mahasiswa",
      faculty: "Engineering and science",
      vehicle: "F 4638 G",
      email: "jal@gmail.com",
      nip: "221135435",
      balance: "10.000",
      status: "Active",
    },
    {
      name: "jal",
      subject: "Mahasiswa",
      faculty: "Engineering and science",
      vehicle: "F 4638 G",
      email: "jal@gmail.com",
      nip: "221135435",
      balance: "10.000",
      status: "Active",
    },
    {
      name: "jal",
      subject: "Mahasiswa",
      faculty: "Engineering and science",
      vehicle: "F 4638 G",
      email: "jal@gmail.com",
      nip: "221135435",
      balance: "10.000",
      status: "Active",
    },
    {
      name: "jal",
      subject: "Mahasiswa",
      faculty: "Engineering and science",
      vehicle: "F 4638 G",
      email: "jal@gmail.com",
      nip: "221135435",
      balance: "10.000",
      status: "Active",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col bg-background">
        {/* Header */}
        <div className="w-full flex items-center justify-between px-5 py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <h1 className="text-xl md:text-2xl font-bold text-white">USER</h1>
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

        {/* Search & Filter */}
        <div className="flex items-center justify-between mt-5 px-1">
          <div>
            <h1 className="text-slate-500">USER MAHASISWA/DOSEN</h1>
          </div>
          <div className="flex">
            <div className="flex bg-white items-center border rounded-md mr-2 px-2">
              <CiSearch className="text-3xl" />
              <input
                type="text"
                placeholder="Search"
                className="p-2 rounded-md border-none flex-grow focus:outline-none"
              />
            </div>
            <button className="border border-b-2 border-black px-4 py-2 rounded-md">Filter</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-lg shadow-lg mt-5 border border-gray-200">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-sm font-semibold py-2 px-4 text-left">Name</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Type User</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Faculty</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Vehicle</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Email</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">NIP/NPM</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Balance</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Status</th>
                <th className="text-sm font-semibold py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="text-sm text-gray-700 py-3 px-4">{user.name}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{user.subject}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{user.faculty}</td>
                  <td className="text-sm text-gray-700 py-3 px-4 relative flex items-center gap-2">
                    {user.vehicle}
                    <div
                      onClick={() => handlePopUpVehicle(index)}
                      className="bg-primary text-white flex justify-center w-auto rounded-xl px-2 py-1"
                    >
                      <FaChevronDown className="text-base" />
                    </div>
                    {popUpVehicle === index && (
                      <div
                        ref={popupRef}
                        className="absolute top-10 right-0 bg-primary p-2 flex flex-col gap-1 rounded-md z-10 shadow-lg text-center"
                      >
                        <div className="flex justify-center items-center text-white gap-2">
                          <div className="bg-yellow-100 rounded-xl p-2">
                            <FaMotorcycle className="text-primary text-base" />
                          </div>
                          <p className="text-sm">F 4638 G</p>
                          <GrTransaction className="text-xs" />
                        </div>
                        <div className="flex justify-center items-center text-white gap-2">
                          <div className="bg-[#FFF4DE] rounded-xl p-2">
                            <FaCarSide className="text-yellow-300 text-base" />
                          </div>
                          <p className="text-sm">F 4638 G</p>
                          <GrTransaction className="text-xs" />
                        </div>
                        <div className="flex justify-center items-center text-white gap-2">
                          <div className="bg-yellow-100 rounded-xl p-2">
                            <FaMotorcycle className="text-primary text-base" />
                          </div>
                          <p className="text-sm">F 4638 G</p>
                          <GrTransaction className="text-xs" />
                        </div>
                        <div className="flex justify-center items-center gap-2 text-secondary">
                          <p>Add</p>
                          <FaPlus />
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">{user.email}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{user.nip}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{user.balance}</td>
                  <td className="text-sm py-3 px-4">
                    <span
                      className={`px-3 py-1 font-semibold rounded-full ${
                        user.status === "Active"
                          ? "text-green-800 bg-green-200"
                          : "text-red-800 bg-red-200"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="cursor-pointer relative py-3 px-7">
                    <div
                      onClick={() => handlePopupToggle(index)}
                      className="bg-gray-200 flex justify-center w-auto rounded-xl p-1"
                    >
                      <FaChevronDown className="text-lg" />
                    </div>
                    {activePopup === index && (
                      <div
                        ref={popupRef}
                        className="absolute top-10 right-0 bg-gray-200 p-3 flex flex-col gap-1 rounded-md z-10 shadow-lg w-32 text-center"
                      >
                        <p className="text-white bg-primary cursor-pointer hover:bg-gray-600 py-1 rounded">
                          Aktif
                        </p>
                        <p className="text-white bg-[#FF3D00] cursor-pointer hover:bg-gray-600 py-1 rounded">
                          Non Aktif
                        </p>
                        <p className="text-white bg-[#195287] cursor-pointer hover:bg-gray-600 py-1 rounded flex items-center justify-center gap-2">
                          Top Up <FaCirclePlus />
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-400 flex items-center gap-5">
            <div className="flex items-center gap-1">
              <p>10</p>
              <FaChevronDown />
            </div>
            <p>Items per page</p>
          </div>
          <div className="flex items-center text-sm space-x-2 text-slate-400">
            <div className="flex items-center bg-slate-200 p-1 rounded-lg gap-2">
              <p>1</p>
              <FaChevronDown />
            </div>
            <p>of 1 pages</p>
            <div className="flex items-center">
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
