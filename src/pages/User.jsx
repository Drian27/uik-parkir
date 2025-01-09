import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { fetchUsers } from "../services/apiUser";

// icons
import { CiSearch } from "react-icons/ci";
import {
  FaCarSide,
  FaChevronDown,
  FaCirclePlus,
  FaMotorcycle,
  FaRegCircleCheck,
} from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import ButtonLogOut from "../components/ButtonLogOut";
import { AiOutlineEllipsis } from "react-icons/ai";

const User = () => {
  const [apiUsers, setApiUsers] = useState([]);
  const [activePopup, setActivePopup] = useState(null);
  const [filter, setFilter] = useState();
  const [studentFilter, setStudentFilter] = useState();
  const popupRef = useRef(null);

  // PopUp Action
  const handlePopupToggle = (index) => {
    if (activePopup === index) {
      setActivePopup(null);
    } else {
      setActivePopup(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // PopUp Filter
  const handlefilter = (index) => {
    if (filter === index) {
      setFilter(null);
    } else {
      setFilter(index);
    }
  };

  useEffect(() => {
    const handleOutFilter = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setFilter(null);
      }
    };

    document.addEventListener("mousedown", handleOutFilter);
    return () => {
      document.removeEventListener("mousedown", handleOutFilter);
    };
  }, []);

  // Api User
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        setApiUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  // Dropdown Student
  const toggleStudentDropdown = () => {
    setStudentFilter((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col bg-background">
        {/* Header */}
        <div className="w-full flex items-center justify-between px-5 py-1 md:py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img src="./assets/img/dashboard/logo-uika.png" alt="logo-uika" />
            </div>
            <div className="text-white leading-tight">
              <p className="md:text-xl font-light">Abdul Murudul</p>
              <p className="md:text-sm text-xs font-[800]">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm md:text-2xl font-bold text-white">USER</h1>
          <ButtonLogOut />
        </div>

        {/* Search & Filter */}
        <div className="flex items-center justify-between mt-5 px-1">
          <div>
            <h1 className="text-slate-500">ALL USER</h1>
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
            <button
              className="border border-b-2 border-black px-4 py-2 rounded-md"
              onClick={handlefilter}
            >
              Filter
            </button>
            {filter && (
              <div
                ref={popupRef}
                className="absolute top-40 right-5 bg-white border border-primary text-primary p-3 flex flex-col items-start gap-2 rounded-md z-10 shadow-lg"
              >
                <button>Lecturer</button>
                <button
                  className="flex items-center gap-3"
                  onClick={toggleStudentDropdown}
                >
                  Student
                  <span className="text-2xl text-black">
                    <IoMdArrowDropdown />
                  </span>
                </button>
                {studentFilter && (
                  <div className="ml-6 mt-2 bg-gray-100 border border-gray-300 rounded-md p-2 shadow">
                    <button className="block text-left w-full">
                      Faculty of Islamic Religion
                    </button>
                    <button className="block text-left w-full">
                      Faculty of Teacher Training and Education
                    </button>
                    <button className="block text-left w-full">
                      Faculty of Law
                    </button>
                    <button className="block text-left w-full">
                      Faculty of Economics and Business
                    </button>
                    <button className="block text-left w-full">
                      Faculty of Health Sciences
                    </button>
                    <button className="block text-left w-full">
                      Faculty of Engineering and Science
                    </button>
                  </div>
                )}
                <button>Employee</button>
                <button>Other</button>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-lg mt-5">
          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Name
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Type User
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Faculty
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Vehicle
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Email
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  NIP/NPM
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Balance
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Status
                </th>
                <th className="text-sm font-semibold py-2 px-4 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {apiUsers.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {user.name}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {user.role}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {user.faculty}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4 relative flex items-center gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        {user.vehicle} <FaMotorcycle className="text-primary" />{" "}
                        <FaRegCircleCheck className="text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        {user.vehicle} <FaCarSide className="text-secondary" />
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {user.email}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {user.npm}
                  </td>
                  <td className="text-sm text-gray-700 py-3 px-4">
                    {user.saldo}
                  </td>
                  <td className="text-sm py-3 px-4">
                    <span
                      className={`px-3 py-1 font-semibold rounded-md ${
                        user.status === "Active"
                          ? "text-white bg-primary"
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
                      <AiOutlineEllipsis className="text-lg" />
                    </div>
                    {activePopup === index && (
                      <div
                        ref={popupRef}
                        className="absolute top-10 right-0 bg-gray-200 p-3 flex flex-col gap-1 rounded-md z-10 shadow-lg w-32 text-center"
                      >
                        <button className="text-white bg-primary cursor-pointer hover:bg-gray-600 py-1 rounded">
                          Aktif
                        </button>
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
        <div className="mt-4 flex items-center justify-center">
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
