import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { RiPieChart2Fill } from 'react-icons/ri';
import { IoPerson, IoSettingsOutline } from 'react-icons/io5';
import { useNavigate, NavLink } from 'react-router-dom';
import { HiDocumentChartBar, HiMiniIdentification } from 'react-icons/hi2';
import { IoChevronDown } from 'react-icons/io5';

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(window.innerWidth >= 768);
  const [settingDropdown, setSettingDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Menus = [
    { title: 'Dashboard', icon: <RiPieChart2Fill />, path: '/dashboard' },
    { title: 'User', icon: <IoPerson />, path: '/user' },
    { title: 'Transactions', icon: <HiDocumentChartBar />, path: '/transaksi' },
    { title: 'Presence', icon: <HiMiniIdentification />, path: '/presence' },
    {
      title: 'Setting',
      icon: <IoMdSettings />,
      dropdown: true,
      path: '/setting',
      subMenus: [
        { title: 'Admin', path: '/setting/admin' },
        {
          title: 'Financial Statements',
          path: '/setting/financial-statements',
        },
      ],
    },
  ];

  return (
    <nav
      className={`${
        open ? 'w-72' : 'w-20'
      } h-screen flex flex-col bg-white sticky top-0 border-r shadow-sm transition-all duration-500 ease-in-out`}
    >
      <div className="relative flex items-center justify-between p-4">
        <img
          src="../assets/img/dashboard/P.png"
          alt="logo"
          className="w-20"
        />
        {open && (
          <h1 className="text-xl font-bold text-primary">Parkir UIKA</h1>
        )}
        <div
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer -right-3 bg-primary rounded-full transform -translate-y-1/2 p-1 ${
            open ? 'top-20' : 'top-16'
          }`}
        >
          <IoIosArrowBack
            className={`text-secondary transition-transform duration-400 ${
              open ? 'rotate-180 text-2xl' : '-rotate-90 text-lg'
            }`}
          />
        </div>
      </div>
      <div className="h-[2px] my-2 bg-gray-400 mx-2"></div>
      <ul className="flex-1">
        {Menus.map((menu, index) => (
          <li
            key={index}
            className="relative mx-2 mb-5"
          >
            {menu.dropdown ? (
              <div>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center gap-x-4 p-2 text-black cursor-pointer ${
                      open ? '' : 'justify-center'
                    } ${
                      isActive || settingDropdown
                        ? 'bg-green-100 text-primary'
                        : 'text-slate-400'
                    } w-full p-2 rounded-lg hover:bg-gray-200`
                  }
                >
                  <span className="text-xl text-center">{menu.icon}</span>
                  {open && <span>{menu.title}</span>}
                  {open && (
                    <IoChevronDown
                      onClick={() => setSettingDropdown(!settingDropdown)}
                      className={`ml-auto transition-transform ${
                        settingDropdown ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  )}
                </NavLink>
                {settingDropdown && (
                  <ul className="pl-8">
                    {menu.subMenus.map((subMenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="mb-2"
                      >
                        <NavLink
                          to={subMenu.path}
                          className={({ isActive }) =>
                            `text-sm block px-4 py-2 rounded-lg ${
                              isActive ? 'text-primary' : 'text-slate-400'
                            } hover:bg-gray-200`
                          }
                        >
                          {subMenu.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 text-black cursor-pointer hover:bg-slate-200 ${
                    open ? '' : 'justify-center'
                  } ${
                    isActive
                      ? 'bg-green-100 w-full p-2 text-primary rounded-lg'
                      : 'w-full p-2 text-slate-400 rounded-lg'
                  }`
                }
              >
                <span className="text-xl text-center">{menu.icon}</span>
                {open && <span>{menu.title}</span>}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
