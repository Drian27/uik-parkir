import { useState, useEffect } from "react";

// icons
import { IoIosArrowBack } from "react-icons/io";
import { RiPieChart2Fill } from "react-icons/ri";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { useNavigate, NavLink } from "react-router-dom";
import { HiDocumentChartBar } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(window.innerWidth >= 768);
  const [settingDropdown, setSettingDropdown] = useState(false);

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
    { title: "Transactions", icon: <HiDocumentChartBar />, path: "/transaksi" },
    {
      title: "Setting",
      icon: <IoSettingsOutline />,
      dropdown: [
        { title: "Admin", path: "/setting/admin" },
        { title: "Financial", path: "/setting/financial" },
      ],
    },
  ];

  return (
    <nav
      className={`${
        open ? "w-72" : "w-20"
      } h-screen flex flex-col bg-white sticky top-0 border-r shadow-sm transition-all duration-500 ease-in-out`}
    >
      <div className="p-2 md:p-4 pb-2 flex justify-between items-center relative">
        <img
          src="../assets/img/dashboard/P.png"
          alt="logo"
          className="w-20"
        />
        {open && <h1 className="text-primary text-xl font-bold">Parkir UIKA</h1>}
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
            className="relative mx-2 mb-5"
          >
            {!menu.dropdown ? (
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 text-black cursor-pointer ${
                    open ? "" : "justify-center"
                  } ${
                    isActive
                      ? "bg-green-100 w-full p-2 text-primary rounded-lg"
                      : "w-full p-2 text-slate-300 rounded-lg"
                  }`
                }
              >
                <span className="text-xl text-center">{menu.icon}</span>
                {open && <span>{menu.title}</span>}
              </NavLink>
            ) : (
              <div>
                <div
                  onClick={() => setSettingDropdown(!settingDropdown)}
                  className={`flex items-center gap-x-4 p-3 text-black cursor-pointer ${
                    open ? "" : "justify-center"
                  } w-full p-2 text-slate-300 rounded-lg hover:bg-gray-200`}
                >
                  <span className="text-xl text-center">{menu.icon}</span>
                  {open && <span>{menu.title}</span>}
                  {open && (
                    <IoChevronDown
                      className={`ml-auto transition-transform ${
                        settingDropdown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </div>

                {settingDropdown && (
                  <ul className={`pl-8 transition-all duration-300 ${open ? "block" : "hidden"}`}>
                    {menu.dropdown.map((item, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `block py-2 text-sm text-black cursor-pointer ${
                              isActive ? "text-primary font-bold" : "text-slate-400"
                            } hover:text-primary`
                          }
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
