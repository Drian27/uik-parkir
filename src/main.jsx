import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Dashbord from './pages/Dashbord.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashbord />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
