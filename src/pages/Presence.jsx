import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

import ButtonLogOut from '../components/ButtonLogOut';

// icons
import { FaMotorcycle, FaCarSide } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import { HiMiniWallet } from 'react-icons/hi2';
import { IoCalendar } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

const Presence = () => {
  const [filter, setFilter] = useState([]);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full px-5 bg-background">
          {/* Header */}
          <div>
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
              <h1 className="text-sm font-bold text-white md:text-2xl">
                PRESENCE
              </h1>
              <ButtonLogOut />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="">
              Presence <span className="text-blue-700">Admin</span>
              <span className="ml-1 text-primary ">Operator</span>
            </p>
            <div className="flex items-center px-2 bg-transparent border border-gray-300 rounded-lg border-1">
              <CiSearch className="text-3xl" />
              <input
                type="text"
                placeholder="Search"
                className="flex-grow p-2 bg-transparent rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between my-5">
            <div className="relative">
              <button className="flex items-center gap-2 p-2 text-gray-500 bg-gray-200 rounded-md">
                <p className="font-medium">29 Oktober 2024</p>
                <IoCalendar className="text-xl mb-0.5" />
              </button>
            </div>
          </div>
          <div>
            {history.length === 0 ? (
              <p className="text-center animate-pulse">Loading data...</p>
            ) : (
              <table className="w-full">
                <thead className="text-white bg-primary">
                  <tr>
                    <th className="p-3 text-sm font-semibold text-left">
                      Name
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">
                      Type User
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">
                      NIP/NPM
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">
                      Email
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">
                      Vehicle
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">
                      Date
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">
                      Payment
                    </th>
                    <th className="p-3 text-sm font-semibold text-left">In</th>
                    <th className="p-3 text-sm font-semibold text-left">Out</th>
                    <th className="p-3 text-sm font-semibold text-left">
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody className="w-full overflow-x-auto">
                  <tr className="text-xs bg-white">
                    <td className="px-1 py-1 text-gray-700">Abdul</td>
                    <td className="px-1 py-1 text-gray-700">MHS</td>
                    <td className="px-1 py-1 text-gray-700">221106042819</td>
                    <td className="px-1 py-1 text-gray-700">abdul@gmail.com</td>
                    <td className="flex items-center gap-2 px-1 py-1 text-gray-700">
                      <div className="p-2 bg-green-100 rounded-xl">
                        <FaMotorcycle className="text-base text-primary" />
                      </div>
                    </td>
                    <td className="px-1 py-1 text-gray-700">17/01/2025</td>
                    <td className="px-1 py-1 text-gray-700">cash</td>
                    <td className="px-1 py-1 text-primary">7.00</td>
                    <td className="px-1 py-1 text-red-700">10.000</td>
                    <td className="px-1 py-1 font-semibold text-gray-700">
                      10000
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Presence;
