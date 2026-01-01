import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const GuestLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020b3a]">

      <div className="absolute inset-0 bg-linear-to-br from-[#020b3a] via-[#072fc0] to-[#000822]" />

      <div className="absolute -right-1/3 top-1/4 h-[120%] w-[120%] rounded-full 
        bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.35)_0%,transparent_60%)] blur-2xl" />

      <div className="absolute inset-0 
        bg-[linear-gradient(115deg,transparent_30%,rgba(59,130,246,0.25)_45%,transparent_65%)]" />

      <div className="absolute inset-0 opacity-20 mix-blend-overlay 
        bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_4px)]" />

      <div className="relative z-10 flex h-screen items-center justify-center">

        <Outlet />

      </div>

    </div>
  );
}

export default GuestLayout;
