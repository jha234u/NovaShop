import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#09090B] overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md mx-4"
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/novashop-logo.png"
              alt="NovaShop"
              className="w-20 h-20 mb-4"
            />

            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              NovaShop
            </h1>

            <p className="text-gray-400 mt-2">Welcome Back 👋</p>
          </div>

          <div className="relative mb-5">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="relative mb-6">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl py-4 pl-12 pr-12 outline-none focus:border-cyan-500 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-purple-500/40">
            Login
          </button>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-purple-400 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
