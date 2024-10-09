import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaParking, FaUsers } from 'react-icons/fa';
import { FaMotorcycle } from 'react-icons/fa6';

const Dashboard = () => {
  // State untuk halaman dan jumlah item per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Data kendaraan dan pengguna
  const parkingData = {
    mahasiswa: [
      {
        id: 1,
        platNomor: 'F 1234 CD',
        owner: 'Bayu',
        day: 'Monday',
        month: 'September',
        year: '2024',
      },
      {
        id: 2,
        platNomor: 'B 5678 GH',
        owner: 'Yeri',
        day: 'Tuesday',
        month: 'September',
        year: '2024',
      },
      {
        id: 3,
        platNomor: 'AB 9101 KL',
        owner: 'Pudji',
        day: 'Wednesday',
        month: 'September',
        year: '2024',
      },
      {
        id: 4,
        platNomor: 'D 2345 XY',
        owner: 'Siti',
        day: 'Thursday',
        month: 'September',
        year: '2024',
      },
      {
        id: 5,
        platNomor: 'E 6789 FG',
        owner: 'Andre',
        day: 'Friday',
        month: 'September',
        year: '2024',
      },
      {
        id: 6,
        platNomor: 'G 1122 BC',
        owner: 'Agus',
        day: 'Saturday',
        month: 'September',
        year: '2024',
      },
      {
        id: 7,
        platNomor: 'H 3344 LM',
        owner: 'Budi',
        day: 'Sunday',
        month: 'September',
        year: '2024',
      },
      {
        id: 8,
        platNomor: 'Z 5566 OP',
        owner: 'Rina',
        day: 'Monday',
        month: 'October',
        year: '2024',
      },
      {
        id: 9,
        platNomor: 'T 7788 QR',
        owner: 'Cahyo',
        day: 'Tuesday',
        month: 'October',
        year: '2024',
      },
      {
        id: 10,
        platNomor: 'W 9900 ST',
        owner: 'Mia',
        day: 'Wednesday',
        month: 'October',
        year: '2024',
      },
      {
        id: 11,
        platNomor: 'W 8800 ST',
        owner: 'Nia',
        day: 'Thursday',
        month: 'October',
        year: '2024',
      },
      {
        id: 12,
        platNomor: 'W 9300 ST',
        owner: 'Yuli',
        day: 'Friday',
        month: 'October',
        year: '2024',
      },
    ],
    users: [
      { id: 1, name: 'Bayu' },
      { id: 2, name: 'Yeri' },
      { id: 3, name: 'Pudji' },
      { id: 4, name: 'Siti' },
      { id: 5, name: 'Andre' },
      { id: 6, name: 'Agus' },
      { id: 7, name: 'Budi' },
      { id: 8, name: 'Rina' },
      { id: 9, name: 'Cahyo' },
      { id: 10, name: 'Mia' },
      { id: 11, name: 'Nia' },
      { id: 12, name: 'Yuli' },
    ],
  };

  // State untuk filter berdasarkan Hari, Bulan, Tahun
  const [filter, setFilter] = useState({
    day: 'All Days',
    month: 'All Months',
    year: 'All Years',
  });

  // Fungsi untuk menerapkan filter berdasarkan hari, bulan, dan tahun
  const filteredMahasiswa = parkingData.mahasiswa.filter((item) => {
    const filterDay = filter.day === 'All Days' || item.day === filter.day;
    const filterMonth =
      filter.month === 'All Months' || item.month === filter.month;
    const filterYear = filter.year === 'All Years' || item.year === filter.year;

    return filterDay && filterMonth && filterYear;
  });

  // Update jumlah halaman saat `itemsPerPage` berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Hitung total kendaraan dan total pengguna
  const totalmahasiswa = filteredMahasiswa.length; // Hitung jumlah mahasiswa yang terfilter
  const totalUsers = parkingData.users.length;

  // Hitung jumlah total halaman berdasarkan `itemsPerPage`
  const totalPages = Math.ceil(totalmahasiswa / itemsPerPage); // Hitung total halaman berdasarkan mahasiswa yang terfilter

  // Ambil data mahasiswa yang sesuai dengan halaman saat ini
  const currentMahasiswa = filteredMahasiswa.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Update state filter berdasarkan pilihan dropdown
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Muncul dari tengah dengan skala kecil
      animate={{ opacity: 1, scale: 1 }} // Menjadi opacity penuh dan skala 1 (normal)
      exit={{ opacity: 0, scale: 0.5 }} // Saat keluar, kembali mengecil ke tengah
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Durasi animasi dan easing
    >
      <div className="flex flex-col items-center h-[100vh] bg-gradient-to-t from-white to-green-600 p-6">
        <h1 className="mb-8 text-4xl font-bold text-white">
          Dashboard Parkir Mahasiswa
        </h1>

        {/* Filter Section */}
        <div className="flex justify-end mb-4 space-x-4">
          {/* Filter Day */}
          <div>
            <label className="mr-2 text-lg font-medium">Hari:</label>
            <select
              name="day" // Menambahkan atribut name
              className="p-2 border rounded"
              value={filter.day}
              onChange={handleFilterChange} // Menggunakan fungsi handleFilterChange
            >
              <option value="All Days">All Days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>

          {/* Filter Month */}
          <div>
            <label className="mr-2 text-lg font-medium">Bulan:</label>
            <select
              name="month" // Menambahkan atribut name
              className="p-2 border rounded"
              value={filter.month}
              onChange={handleFilterChange} // Menggunakan fungsi handleFilterChange
            >
              <option value="All Months">All Months</option>
              <option value="September">September</option>
              <option value="October">October</option>
              {/* Tambahkan bulan lain sesuai kebutuhan */}
            </select>
          </div>

          {/* Filter Year */}
          <div>
            <label className="mr-2 text-lg font-medium">Tahun:</label>
            <select
              name="year" // Menambahkan atribut name
              className="p-2 border rounded"
              value={filter.year}
              onChange={handleFilterChange} // Menggunakan fungsi handleFilterChange
            >
              <option value="All Years">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              {/* Tambahkan tahun lain sesuai kebutuhan */}
            </select>
          </div>
        </div>

        {/* Statistik Parkir */}
        <div className="grid w-full max-w-4xl grid-cols-3 gap-6 mb-8">
          {/* Total Kendaraan */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Total Kendaraan</h2>
              <p className="text-3xl font-bold">{totalmahasiswa}</p>
            </div>
            <FaMotorcycle className="text-4xl text-green-500" />
          </div>

          {/* Total Pengguna */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Total Pengguna</h2>
              <p className="text-3xl font-bold">{totalUsers}</p>
            </div>
            <FaUsers className="text-4xl text-green-500" />
          </div>

          {/* Kendaraan Terparkir */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Kendaraan Terparkir</h2>
              <p className="text-3xl font-bold">{totalmahasiswa}</p>
            </div>
            <FaParking className="text-4xl text-green-500" />
          </div>
        </div>

        {/* Daftar Kendaraan */}
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-center text-green-500">
            Daftar Kendaraan Terparkir
          </h2>
          <div className="flex items-center justify-end mb-4">
            <label className="mr-2 text-lg font-medium">Tampilkan:</label>
            <select
              className="p-2 border rounded"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <ul className="space-y-4">
            {currentMahasiswa.map((mahasiswa) => (
              <li
                key={mahasiswa.id}
                className="flex items-center justify-between p-4 bg-gray-300 rounded-md shadow-sm"
              >
                <span className="text-lg font-medium">
                  {mahasiswa.platNomor}
                </span>
                <span className="text-lg">{mahasiswa.owner}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between px-2 mt-5">
            {/* Tombol Back - hanya aktif jika bukan halaman pertama */}
            <button
              className={`px-3 py-1 font-semibold text-white bg-black rounded-md ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Back
            </button>

            {/* Tombol Next - hanya aktif jika masih ada lebih banyak kendaraan */}
            <button
              className={`px-3 py-1 font-semibold text-white bg-green-500 rounded-md ${
                currentPage === totalPages
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
