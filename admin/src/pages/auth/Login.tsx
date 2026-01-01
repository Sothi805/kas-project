import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import FormInput from "../../components/common/FormInput";
import GlassButton from "../../components/common/GlassButton";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/login", { username, password });
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Try admin@example.com / password123");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-transparent bg-clip-padding backdrop-filter backdrop-blur-xs inset-shadow-white/50 inset-shadow-md shadow-white/50 shadow-xs border/50 border-gray-50 rounded-xl p-8 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-white mb-6 drop-shadow-white/50 drop-shadow-md">Login to Continue</h1>

        {error && <div className="mb-4 px-4 py-1 bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-xs inset-shadow-white/50 inset-shadow-xs shadow-white/50 shadow-xs border/50 border-gray-50 text-red-700 rounded-full">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4 flex flex-col w-full">
          <FormInput
            label="Username"
            type="username"
            value={username}
            onChange={setUsername}
            disabled={loading}
          />  
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            disabled={loading}
          />


          {/* Forgot password */}
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white underline text-right"
          >
            Forgot Password?
          </a>


          <GlassButton type="submit" loading={loading}>
            Login
          </GlassButton>

        </form>
      </div>
    </div>
  );
};

export default Login;