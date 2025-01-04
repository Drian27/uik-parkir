import React, { Suspense, lazy } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
import "./index.css";

// Lazy-loaded pages
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

// Middleware for Protected Routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  // Validasi token jika perlu (misal menggunakan JWT)
  if (!token) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  // Optional Cek apakah token masih valid (contoh validasi JWT)
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Dekode JWT untuk memeriksa eksp
    if (decodedToken.exp * 1000 < Date.now()) {
      console.log("Token kadaluarsa, mengarahkan ke login");
      localStorage.removeItem("authToken"); // Hapus token yang sudah kadaluarsa
      return (
        <Navigate
          to="/"
          replace
        />
      );
    }
  } catch (error) {
    console.log("Token tidak valid, mengarahkan ke login", error);
    localStorage.removeItem("authToken");
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="h-[100vh] flex justify-center items-center text-5xl animate-spin">
              <AiOutlineLoading3Quarters />
            </div>
          }
        >
          <Home />
        </Suspense>
      ),
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
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "user",
          element: (
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          ),
        },
        {
          path: "transaksi",
          element: (
            <ProtectedRoute>
              <Transaksi />
            </ProtectedRoute>
          ),
        },
        {
          path: "setting",
          element: (
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          ),
        },
        {
          path: "setting/admin",
          element: (
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          ),
        },
        {
          path: "setting/financial",
          element: (
            <ProtectedRoute>
              <Financial />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense
          fallback={
            <div className="h-[100vh] flex justify-center items-center text-5xl animate-spin">
              <AiOutlineLoading3Quarters />
            </div>
          }
        >
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);
}
