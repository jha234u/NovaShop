import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#09090B] overflow-hidden">
      <div className="absolute -top-20 left-0 w-80 h-80 bg-purple-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md mx-4"
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex flex-col items-center mb-8">
            <img src="/novashop-logo.png" className="w-20 h-20" alt="" />

            <h1 className="text-4xl font-black mt-3 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Create Account
            </h1>

            <p className="text-gray-400 mt-2">Join NovaShop Today</p>
          </div>

          <div className="relative mb-5">
            <User className="absolute left-4 top-4 text-gray-400" />

            <input
              placeholder="Full Name"
              className="w-full bg-zinc-900/80 rounded-xl py-4 pl-12 pr-4 border border-white/10 outline-none"
            />
          </div>

          <div className="relative mb-5">
            <Mail className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-zinc-900/80 rounded-xl py-4 pl-12 pr-4 border border-white/10 outline-none"
            />
          </div>

          <div className="relative mb-5">
            <Lock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-zinc-900/80 rounded-xl py-4 pl-12 pr-12 border border-white/10 outline-none"
            />

            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4">
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <div className="relative mb-7">
            <Lock className="absolute left-4 top-4 text-gray-400" />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full bg-zinc-900/80 rounded-xl py-4 pl-12 pr-12 border border-white/10 outline-none"
            />

            <button onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-4">
              {showConfirm ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold hover:scale-105 transition">
            Create Account
          </button>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?
            <Link to="/login" className="text-cyan-400 ml-2">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
