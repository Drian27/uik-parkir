import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

// icons
import { FaMotorcycle, FaCarSide } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiMiniWallet } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css";
import ButtonLogOut from "../components/ButtonLogOut";
import axios from "axios";

const Transaksi = () => {
  const [selectedFilter, setSelectedFilter] = useState("cash");
  const [category, setCategory] = useState("all");
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
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setHistory(response.data))
      .catch((err) => console.error(err));
  });

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

  // Function to handle operator selection
  const handleOperatorChange = (operator) => {
    setSelectedOperator(operator);
    setIsOpen(false); // Close dropdown on selection
  };

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
      name: "dul",
      typeuser: "Karyawan",
      npm: "221135435",
      email: "dul@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.20.000",
    },
    {
      name: "dik",
      typeuser: "Mahasiswa",
      npm: "221135435",
      email: "dik@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "non-cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.15.000",
    },
    {
      name: "zaki",
      typeuser: "Dosen",
      npm: "221135435",
      email: "zaki@gmail.com",
      vehicle: "motor",
      date: "29 Okt 2024",
      payment: "non-cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.12.000",
    },
    {
      name: "syifa",
      typeuser: "Other",
      npm: "221135435",
      email: "syifa@gmail.com",
      vehicle: "mobil",
      date: "29 Okt 2024",
      payment: "cash",
      in: "14.20 pm",
      out: "16.30 pm",
      price: "Rp.25.000",
    },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    if (category === "all") return true;
    if (category === "student" && transaction.typeuser.toLowerCase() === "mahasiswa") return true;
    if (category === "lecturer" && transaction.typeuser.toLowerCase() === "dosen") return true;
    if (category === "employee" && transaction.typeuser.toLowerCase() === "karyawan") return true;
    if (category === "other" && transaction.typeuser.toLowerCase() === "other") return true;
    return false;
  });

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
          <div className="relative">
            <button
              onClick={() => setFilterVisible(!filterVisible)}
              className="bg-gray-200 text-gray-500 rounded-md gap-2 p-2 flex items-center"
            >
              <p className="font-medium">29 Oktober 2024</p>
              <IoCalendar className="text-xl mb-0.5" />
            </button>
            {filterVisible && (
              <div className="absolute top-15 left-0 bg-white shadow-lg rounded-lg p-4 z-50">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("today")}
                    >
                      Today
                    </button>
                    <button
                      className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("yesterday")}
                    >
                      Yesterday
                    </button>
                    <button
                      className="bg-gray-100 text-black py-2 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("thisWeek")}
                    >
                      This Week
                    </button>
                    <button
                      className="bg-gray-100 text-black py-2 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("lastWeek")}
                    >
                      Last Week
                    </button>
                    <button
                      className="bg-gray-100 text-black py-2 rounded-lg hover:bg-gray-200"
                      onClick={() => setPredefinedRange("thisMonth")}
                    >
                      This Month
                    </button>
                    <button
                      className="bg-gray-100 text-black py-2 rounded-lg hover:bg-gray-200"
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
                  className="bg-primary text-white px-4 py-2 rounded-lg w-full"
                  onClick={() => setFilterVisible(false)}
                >
                  Apply Filter
                </button>
              </div>
            )}
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
        <div className="overflow-auto rounded-lg shadow-lg my-5 relative">
          <div className="flex justify-between items-center p-5 bg-white">
            <div className="flex gap-10">
              <button
                onClick={() => setCategory("all")}
                className={`${
                  category === "all"
                    ? "text-primary font-bold border-t-primary border-t-4"
                    : "text-gray-400 font-medium"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setCategory("student")}
                className={`${
                  category === "student"
                    ? "text-primary font-bold border-t-primary border-t-4"
                    : "text-gray-400 font-medium"
                }`}
              >
                Student
              </button>
              <button
                onClick={() => setCategory("lecturer")}
                className={`${
                  category === "lecturer"
                    ? "text-primary font-bold border-t-primary border-t-4"
                    : "text-gray-400 font-medium"
                }`}
              >
                Lecturer
              </button>
              <button
                onClick={() => setCategory("employee")}
                className={`${
                  category === "employee"
                    ? "text-primary font-bold border-t-primary border-t-4"
                    : "text-gray-400 font-medium"
                }`}
              >
                Employee
              </button>
              <button
                onClick={() => setCategory("other")}
                className={`${
                  category === "other"
                    ? "text-primary font-bold border-t-primary border-t-4"
                    : "text-gray-400 font-medium"
                }`}
              >
                Other
              </button>
            </div>
            <div className="relative inline-block text-left">
              <div className="flex items-center gap-3">
                <p>Operator : </p>
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex justify-center items-center font-bold w-full rounded-md shadow-sm px-4 py-2 text-sm hover:bg-gray-50"
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
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

          <table className="w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-sm font-semibold py-4 px-4 text-left">Name</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Type User</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">NIP/NPM</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Email</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Vehicle</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Date</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Payment</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">In</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Out</th>
                <th className="text-sm font-semibold py-4 px-4 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {history.map((historys, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 bg-white"
                >
                  <td className="text-sm text-gray-700 py-3 px-4">{historys.title}</td>
                  {/* <td className="text-sm text-gray-700 py-3 px-4">{transaction.typeuser}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.npm}</td>
                  <td className="text-sm text-gray-700 py-3 px-4">{transaction.email}</td>
                  <td className="text-sm text-gray-700 py-3 px-4 flex items-center gap-2">
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
                  </td> */}
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
