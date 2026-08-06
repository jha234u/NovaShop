import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return alert("Please fill all fields.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      setLoading(true);

      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6">

      {/* Background Blur */}
      <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <form
          onSubmit={handleRegister}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl"
        >
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">

            <img
              src="/logo.png"
              alt="NovaShop"
              className="mb-4 h-20 w-20 object-contain"
            />

            <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-4xl font-black text-transparent">
              Join NovaShop
            </h1>

            <p className="mt-2 text-center text-gray-400">
              Create your account and start shopping today.
            </p>
          </div>

          {/* Name */}
          <div className="relative mb-5">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 py-4 pl-12 pr-4 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          {/* Email */}
          <div className="relative mb-5">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 py-4 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-5">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 py-4 pl-12 pr-12 text-white outline-none transition focus:border-purple-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-8">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/80 py-4 pl-12 pr-12 text-white outline-none transition focus:border-cyan-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-400">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 font-medium text-cyan-400 transition hover:text-purple-400"
            >
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;