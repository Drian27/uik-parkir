import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

// icons
import { FaMotorcycle, FaCarSide } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiMiniWallet } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { transaktionAll } from "../services/apiTransaksi";
import ButtonLogOut from "../components/ButtonLogOut";

const Transaksi = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("cash");
  const [category, setCategory] = useState("all");
  const [filter, setFilter] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await transaktionAll();
        setHistory(data);
        setFilter(data);
      } catch (err) {
        console.log(err + " Failed to fetch data");
      }
    };

    fetchHistory();
  }, []);

  const setPredefinedRange = (type) => {
    const today = new Date();
    let startDate, endDate;

    switch (type) {
      case "today":
        startDate = endDate = today;
        break;
      case "yesterday":
        startDate = endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        break;
      case "thisWeek":
        const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        startDate = firstDayOfWeek;
        endDate = new Date(
          firstDayOfWeek.getFullYear(),
          firstDayOfWeek.getMonth(),
          firstDayOfWeek.getDate() + 6
        );
        break;
      case "lastWeek":
        const lastWeekStart = new Date(today.setDate(today.getDate() - today.getDay() - 7));
        startDate = lastWeekStart;
        endDate = new Date(
          lastWeekStart.getFullYear(),
          lastWeekStart.getMonth(),
          lastWeekStart.getDate() + 6
        );
        break;
      case "thisMonth":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "lastMonth":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        startDate = endDate = today;
    }

    setDateRange([{ startDate, endDate, key: "selection" }]);
  };

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleOperatorChange = (operator) => {
    setSelectedOperator(operator);
    setIsOpen(false);
  };

  const mapRoleToCategory = (role) => {
    switch (role) {
      case "MHS":
        return "student";
      case "Dosen":
        return "lecturer";
      case "Karyawan":
        return "employee";
      default:
        return "other";
    }
  };

  useEffect(() => {
    let filteredData = [...history];

    if (category !== "all") {
      filteredData = filteredData.filter((item) => mapRoleToCategory(item.user.role) === category);
    }

    if (search) {
      filteredData = filteredData.filter((transaction) =>
        transaction.user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilter(filteredData);
  }, [category, search, history]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full px-5 bg-background">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-2 py-1 mt-5 font-semibold md:px-5 md:py-2 bg-primary rounded-2xl">
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
          <h1 className="text-sm font-bold text-white md:text-2xl">TRANSACTIONS</h1>
          <ButtonLogOut />
        </div>

        {/* Income */}
        <div className="flex justify-between my-5">
          <div className="relative">
            <button
              onClick={() => setFilterVisible(!filterVisible)}
              className="flex items-center gap-2 p-2 text-gray-500 bg-gray-200 rounded-md"
            >
              <p className="font-medium">29 Oktober 2024</p>
              <IoCalendar className="text-xl mb-0.5" />
            </button>
            {filterVisible && (
              <div className="absolute left-0 z-50 p-4 bg-white rounded-lg shadow-lg top-15">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <button
                      className="px-4 py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("today")}
                    >
                      Today
                    </button>
                    <button
                      className="px-4 py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("yesterday")}
                    >
                      Yesterday
                    </button>
                    <button
                      className="py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("thisWeek")}
                    >
                      This Week
                    </button>
                    <button
                      className="py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("lastWeek")}
                    >
                      Last Week
                    </button>
                    <button
                      className="py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("thisMonth")}
                    >
                      This Month
                    </button>
                    <button
                      className="py-2 text-black bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("lastMonth")}
                    >
                      Last Month
                    </button>
                    <div className="flex justify-center">
                      <img
                        src="./assets/img/dashboard/logo-uika.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div>
                    <DateRange
                      editableDateInputs={true}
                      onChange={handleSelect}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      className="w-full"
                    />
                  </div>
                </div>
                <button
                  className="w-full px-4 py-2 text-white rounded-lg bg-primary"
                  onClick={() => setFilterVisible(false)}
                >
                  Apply Filter
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center px-2 bg-transparent border border-gray-300 rounded-lg border-1">
            <CiSearch className="text-3xl" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow p-2 bg-transparent rounded-md focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg border-1">
            <p className="p-4 text-2xl bg-green-200 rounded-full text-primary">Rp</p>
            <div>
              <p className="text-xs text-gray-400">Total Income</p>
              <p className="text-xl font-black">Rp.3.000.000</p>
            </div>
          </div>
          <div>
            {/* Displaying content based on selected filter */}
            <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg border-1">
              <div className="flex items-center justify-center bg-green-200 rounded-full text-primary">
                <HiMiniWallet className="p-4 text-6xl" />
              </div>
              <div>
                <div className="flex gap-1 text-xs text-gray-400">
                  <p>Total</p>
                  <button
                    onClick={() => setSelectedFilter("cash")}
                    className={`${
                      selectedFilter === "cash" ? "text-primary underline" : "text-gray-400"
                    }`}
                  >
                    Cash
                  </button>
                  <p>or</p>
                  <button
                    onClick={() => setSelectedFilter("non-cash")}
                    className={`${
                      selectedFilter === "non-cash" ? "text-primary underline" : "text-gray-400"
                    }`}
                  >
                    Non Cash
                  </button>
                </div>
                <button className="text-xl font-black">
                  {selectedFilter === "cash" ? "Rp.500.000" : "Rp.250.000"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg border-1">
            <div className="flex items-center justify-center bg-green-200 rounded-full text-primary">
              <FaMotorcycle className="p-4 text-6xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Income Motorcycle</p>
              <p className="text-xl font-black">Rp.1.500.000</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg border-1">
            <div className="flex items-center justify-center rounded-full bg-red-50 text-secondary">
              <FaCarSide className="p-4 text-6xl" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Income Car</p>
              <p className="text-xl font-black">Rp.1.500.000</p>
            </div>
          </div>
        </div>

        {/* Table Transactions */}
        <div className="relative my-5 overflow-auto rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-5 bg-white">
            <div className="flex gap-10">
              {["all", "student", "lecturer", "employee", "other"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`${
                    category === cat
                      ? "text-primary font-bold border-t-primary border-t-4"
                      : "text-gray-400 font-medium"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative inline-block text-left">
              <div className="flex items-center gap-3">
                <p>Operator : </p>
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-bold rounded-md shadow-sm hover:bg-gray-50"
                  >
                    {selectedOperator}
                    <span>
                      <IoMdArrowDropdown className="text-2xl" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <button
                      onClick={() => handleOperatorChange("All")}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        selectedOperator === "All"
                          ? "bg-gray-100 text-primary font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => handleOperatorChange("Operator 1")}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        selectedOperator === "Operator 1"
                          ? "bg-gray-100 text-primary font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      Operator 1
                    </button>
                    <button
                      onClick={() => handleOperatorChange("Operator 2")}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        selectedOperator === "Operator 2"
                          ? "bg-gray-100 text-primary font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      Operator 2
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            {history.length === 0 ? (
              <div className="flex justify-center items-center animate-spin">
                <AiOutlineLoading3Quarters className="font-bold text-2xl" />
              </div>
            ) : (
              <table className="w-full">
                <thead className="text-white bg-primary">
                  <tr>
                    <th className="p-3 text-sm font-semibold text-left">Name</th>
                    <th className="p-3 text-sm font-semibold text-left">Type User</th>
                    <th className="p-3 text-sm font-semibold text-left">NIP/NPM</th>
                    <th className="p-3 text-sm font-semibold text-left">Email</th>
                    <th className="p-3 text-sm font-semibold text-left">Vehicle</th>
                    <th className="p-3 text-sm font-semibold text-left">Date</th>
                    <th className="p-3 text-sm font-semibold text-left">Payment</th>
                    <th className="p-3 text-sm font-semibold text-left">In</th>
                    <th className="p-3 text-sm font-semibold text-left">Out</th>
                    <th className="p-3 text-sm font-semibold text-left">Price</th>
                  </tr>
                </thead>

                <tbody className="w-full overflow-x-auto">
                  {filter.map((transaction, index) => (
                    <tr
                      key={index}
                      className="text-xs bg-white"
                    >
                      <td className="px-1 py-1 text-gray-700">{transaction.user.name}</td>
                      <td className="px-1 py-1 text-gray-700">{transaction.user.role}</td>
                      <td className="px-1 py-1 text-gray-700">{transaction.user.npm}</td>
                      <td className="px-1 py-1 text-gray-700">{transaction.user.email}</td>
                      <td className="flex items-center gap-2 px-1 py-1 text-gray-700">
                        {transaction.vehicle_user.vehicle_user_category === "motorcycle" ? (
                          <div className="p-2 bg-green-100 rounded-xl">
                            <FaMotorcycle className="text-base text-primary" />
                          </div>
                        ) : (
                          <div className="bg-[#FFF4DE] rounded-xl p-2">
                            <FaCarSide className="text-base text-yellow-300" />
                          </div>
                        )}
                      </td>
                      <td className="px-1 py-1 text-gray-700">{transaction.payment.date}</td>
                      <td className="px-1 py-1 text-gray-700">
                        {transaction.payment.payment_method}
                      </td>
                      <td className="px-1 py-1 text-primary">
                        {transaction.vehicle_user.entry_time}
                      </td>
                      <td className="px-1 py-1 text-red-700">
                        {transaction.vehicle_user.exit_time}
                      </td>
                      <td className="px-1 py-1 font-semibold text-gray-700">
                        {transaction.payment.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
