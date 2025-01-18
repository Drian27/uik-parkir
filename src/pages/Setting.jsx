import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ButtonLogOut from '../components/ButtonLogOut';

// icons
import { IoPerson } from 'react-icons/io5';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full px-5 bg-background">
        {/* Header Section */}
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
          <h1 className="text-sm font-bold text-white md:text-2xl">SETTING</h1>
          <ButtonLogOut />
        </div>

        {/* Tab Navigation */}
        <div className="mt-10">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-1/2 py-2 text-center ${
                activeTab === 'profile'
                  ? 'border-b-2 border-primary text-primary font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('changePassword')}
              className={`w-1/2 py-2 text-center ${
                activeTab === 'changePassword'
                  ? 'border-b-2 border-primary text-primary font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Change Password
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'profile' && (
            <div className="p-5 border-[1px] border-slate-700 my-5 rounded-lg">
              <div className="flex items-center mb-5">
                <div className="flex items-center justify-center w-32 h-32 bg-gray-200 border-[1px] rounded-full border-primary">
                  <span>
                    <IoPerson className="text-5xl text-primary" />
                  </span>
                </div>
                <button className="px-4 py-2 ml-6 text-white rounded-lg bg-primary">
                  Change Profile
                </button>
              </div>
              <form>
                <div>
                  <label className="block mb-1 text-sm font-bold">
                    Profile Name
                  </label>
                  <input
                    type="text"
                    placeholder="Profile Name"
                    className="w-full px-5 py-3 border-[1px]  border-slate-700 mb-2 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-3 border-[1px]  border-slate-700 mb-2 rounded-lg outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 text-sm font-bold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-5 py-3 border-[1px]  border-slate-700 mb-2 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-bold">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full px-5 py-3 border-[1px]  border-slate-700 mb-2 rounded-lg outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-bold">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-5 py-3 border-[1px]  border-slate-700 mb-2 rounded-lg outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-bold">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full px-5 py-3 border-[1px]  border-slate-700 mb-2 rounded-lg outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'changePassword' && (
            <div className="p-5 border-[1px] border-slate-700 my-5 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="password"
                  >
                    <span className="block mb-1 font-semibold text-slate-700">
                      Password
                    </span>
                    <div className="relative w-full border-[1px] border-slate-500 rounded-lg">
                      <input
                        className="block w-full px-5 py-3 text-sm border rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        id="password"
                        required
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </label>
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="password"
                  >
                    <span className="block mb-1 font-semibold text-slate-700">
                      New Password
                    </span>
                    <div className="relative w-full border-[1px] border-slate-500 rounded-lg">
                      <input
                        className="block w-full px-5 py-3 text-sm border rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="New Password"
                        name="password"
                        id="password"
                        required
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </label>
                  <label
                    className="block mb-1 text-sm font-medium"
                    htmlFor="password"
                  >
                    <span className="block mb-1 font-semibold text-slate-700">
                      Confirm Password
                    </span>
                    <div className="relative w-full border-[1px] border-slate-500 rounded-lg">
                      <input
                        className="block w-full px-5 py-3 text-sm border rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:focus:ring-red-500"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        name="password"
                        id="password"
                        required
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg border-[1px] border-primary text-primary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 ml-5 text-white rounded-lg bg-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Setting;
