import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { fetchUsers } from '../services/apiUser';

// icons
import { CiSearch } from 'react-icons/ci';
import {
  FaCarSide,
  FaChevronDown,
  FaCirclePlus,
  FaMotorcycle,
  FaRegCircleCheck,
} from 'react-icons/fa6';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from 'react-icons/io';
import ButtonLogOut from '../components/ButtonLogOut';
import { AiOutlineEllipsis } from 'react-icons/ai';

const User = () => {
  const [apiUsers, setApiUsers] = useState([]);
  const [activePopup, setActivePopup] = useState(null);
  const [filter, setFilter] = useState();
  const [studentFilter, setStudentFilter] = useState();
  const popupRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

    document.addEventListener('mousedown', handleOutFilter);
    return () => {
      document.removeEventListener('mousedown', handleOutFilter);
    };
  }, []);

  // Api User
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        setApiUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  // Dropdown Student
  const toggleStudentDropdown = () => {
    setStudentFilter((prev) => !prev);
  };

  // Filter data berdasarkan searchTerm
  const filteredUsers = apiUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full px-5 bg-background">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-5 py-1 mt-5 font-semibold md:py-2 bg-primary rounded-2xl">
          <div className="flex items-center justify-center gap-2">
            <div>
              <img
                src="./assets/img/dashboard/logo-uika.png"
                alt="logo-uika"
              />
            </div>
            <div className="leading-tight text-white">
              <p className="font-light md:text-xl">Abdul Murudul</p>
              <p className="md:text-sm text-xs font-[800]">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm font-bold text-white md:text-2xl">USER</h1>
          <ButtonLogOut />
        </div>

        {/* Search & Filter */}
        <div className="flex items-center justify-between px-1 mt-5">
          <div>
            <h1 className="text-slate-500">ALL USER</h1>
          </div>
          <div className="flex">
            <div className="flex items-center px-2 mr-2 bg-white border rounded-md">
              <CiSearch className="text-3xl" />
              <input
                type="text"
                placeholder="Search"
                className="flex-grow p-2 border-none rounded-md focus:outline-none"
                value={searchTerm} // Hubungkan dengan state
                onChange={(e) => setSearchTerm(e.target.value)} // Update state saat input berubah
              />
            </div>
            <button
              className="px-4 py-2 border border-b-2 border-black rounded-md"
              onClick={handlefilter}
            >
              Filter
            </button>
            {filter && (
              <div
                ref={popupRef}
                className="absolute z-10 flex flex-col items-start gap-2 p-3 bg-white border rounded-md shadow-lg top-40 right-5 border-primary text-primary"
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
                  <div className="p-2 mt-2 ml-6 bg-gray-100 border border-gray-300 rounded-md shadow">
                    <button className="block w-full text-left">
                      Faculty of Islamic Religion
                    </button>
                    <button className="block w-full text-left">
                      Faculty of Teacher Training and Education
                    </button>
                    <button className="block w-full text-left">
                      Faculty of Law
                    </button>
                    <button className="block w-full text-left">
                      Faculty of Economics and Business
                    </button>
                    <button className="block w-full text-left">
                      Faculty of Health Sciences
                    </button>
                    <button className="block w-full text-left">
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
        <div className="mt-5 overflow-auto rounded-lg">
          <table className="w-full">
            <thead className="text-white bg-primary">
              <tr>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Name
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Type User
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Faculty
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Vehicle
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Email
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  NIP/NPM
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Balance
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Status
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {user.role}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {user.faculty}
                  </td>
                  <td className="relative flex items-center gap-2 px-4 py-3 text-sm text-gray-700">
                    <div>
                      <div className="flex items-center gap-2">
                        {user.vehicle} <FaMotorcycle className="text-primary" />{' '}
                        <FaRegCircleCheck className="text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        {user.vehicle} <FaCarSide className="text-secondary" />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {user.npm}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {user.saldo}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-3 py-1 font-semibold rounded-md ${
                        user.status === 'Active'
                          ? 'text-white bg-primary'
                          : 'text-red-800 bg-red-200'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="relative py-3 cursor-pointer px-7">
                    <div
                      onClick={() => handlePopupToggle(index)}
                      className="flex justify-center w-auto p-1 bg-gray-200 rounded-xl"
                    >
                      <AiOutlineEllipsis className="text-lg" />
                    </div>
                    {activePopup === index && (
                      <div
                        ref={popupRef}
                        className="absolute right-0 z-10 flex flex-col w-32 gap-1 p-3 text-center bg-gray-200 rounded-md shadow-lg top-10"
                      >
                        <button className="py-1 text-white rounded cursor-pointer bg-primary hover:bg-gray-600">
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
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <div className="flex items-center gap-2 p-1 rounded-lg bg-slate-200">
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
