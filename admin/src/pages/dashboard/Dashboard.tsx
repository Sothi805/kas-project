import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      
      <div className="bg-white p-6 rounded shadow">
        <p className="text-gray-700">Welcome, {user?.name}!</p>
        <p className="text-gray-600 text-sm">Email: {user?.email}</p>
      </div>
    </div>
  );
}

export default Dashboard;