// src/layouts/AuthLayout.tsx
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
// import Sidebar from "../../components/layout/Sidebar";
// import Topbar from "../../components/layout/Topbar";

export default function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex-1">
        {/* <Topbar /> */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
