import { useNavigate } from "react-router-dom";
import { logout } from "../../services/api";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 text-lg font-bold shadow-sm">Khmer American School</div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul>
          <li className="p-4 cursor-pointer">Dashboard</li>
          <li className="p-4 cursor-pointer">Settings</li>
          <li className="p-4 cursor-pointer">Profile</li>
        </ul>
      </nav>

      {/* Logout pinned bottom */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
