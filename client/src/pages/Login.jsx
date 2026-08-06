import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      login(data.user, data.token);

      alert("Login Successful 🎉");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B]">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-4 w-full max-w-md"
      >
        <form
          onSubmit={handleLogin}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
        >
          <div className="mb-8 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="NovaShop"
              className="mb-4 h-20 w-20 object-contain"
            />

            <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-4xl font-black text-transparent">
              NovaShop
            </h1>

            <p className="mt-2 text-gray-400">
              Welcome back! Sign in to continue shopping.
            </p>
          </div>

          <div className="relative mb-5">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 py-4 pl-12 pr-4 outline-none transition focus:border-purple-500"
            />
          </div>

          <div className="relative mb-6">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 py-4 pl-12 pr-12 outline-none transition focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 py-4 font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400 transition hover:text-purple-400"
            >
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;