import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  const pageNames: Record<string, string> = {
    "/": "Dashboard",
    "/login": "Login",
  };

  const currentPageName = pageNames[location.pathname] || "Page";

  return (
    <header className="bg-white shadow p-4">
      <h1 className="text-xl font-bold">{currentPageName}</h1>
    </header>
  );
}

export default Topbar;