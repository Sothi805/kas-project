// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import GuestLayout from "../components/layouts/GuestLayout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
    ],
  },
  {
    path: "/login",
    element: <GuestLayout />,
    children: [
      { path: "/login", element: <Login /> },
    ],
  },
]);
