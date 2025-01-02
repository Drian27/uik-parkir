import React, { Suspense, lazy } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
import "./index.css";

const Home = lazy(() => import("../pages/Home.jsx"));
const Dashboard = lazy(() => import("../pages/Dashbord.jsx"));
const User = lazy(() => import("../pages/User.jsx"));
const Transaksi = lazy(() => import("../pages/Transaksi.jsx"));
const Setting = lazy(() => import("../pages/Setting.jsx"));
const Admin = lazy(() => import("../pages/SettingAdmin.jsx"));
const Financial = lazy(() => import("../pages/SettingFinancial.jsx"));
const ErrorPage = lazy(() => import("../pages/ErrorPage.jsx"));

// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      element: (
        <Suspense
          fallback={
            <div className="h-[100vh] flex justify-center items-center text-5xl animate-spin">
              <AiOutlineLoading3Quarters />
            </div>
          }
        >
          {" "}
          <Outlet />
        </Suspense>
      ),
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "user", element: <User /> },
        { path: "transaksi", element: <Transaksi /> },
        { path: "setting", element: <Setting /> },
        { path: "setting/admin", element: <Admin /> },
        { path: "setting/financial", element: <Financial /> },
      ],
    },
    {
      path: "*",
      element: (
        <ErrorPage
          to="/errorpage"
          replace
        />
      ), // Halaman 404 tidak ada di rute ini, tambahkan jika perlu
    },
  ]);
}
