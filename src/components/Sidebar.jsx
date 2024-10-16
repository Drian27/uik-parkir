import { useState, useEffect } from "react";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { RiPieChart2Fill } from "react-icons/ri";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LuFileBarChart } from "react-icons/lu";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Menus = [
    { title: "Dashboard", icon: <RiPieChart2Fill />, path: "/dashboard" },
    { title: "User", icon: <IoPerson />, path: "/user" },
    { title: "Transaksi", icon: <LuFileBarChart />, path: "/transaksi" },
    { title: "Setting", icon: <IoSettingsOutline />, path: "/setting" },
  ];

  return (
    <nav
      className={`${
        open ? "w-72" : "w-20"
      } h-screen flex flex-col bg-white border-r shadow-sm  transition-all duration-500 ease-in-out`}
    >
      <div className="p-4 pb-2 flex justify-between items-center relative">
        <img
          src="./assets/img/dashboard/P.png"
          alt="p"
          className="w-24"
        />
        {open && <h1 className="text-secondary text-2xl font-bold mr-3">Parkir UIKA</h1>}
        <div
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-3 bg-primary rounded-full transform -translate-y-1/2 p-1 ${
            open ? "top-20" : "top-16"
          }`}
        >
          <IoIosArrowBack
            className={`text-secondary transition-transform duration-300 ${
              open ? "rotate-180 text-2xl" : "-rotate-90 text-lg"
            }`}
          />
        </div>
      </div>
      <div className="h-[2px] my-2 bg-gray-300 mx-2"></div>
      <ul className="flex-1">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`flex items-center gap-x-4 p-3 text-black hover:bg-gray-200 cursor-pointer ${
              open ? "" : "justify-center"
            }`}
            onClick={() => navigate(menu.path)}
          >
            <span className="text-xl text-center">{menu.icon}</span>
            {open && <span>{menu.title}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
