import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiUser,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090B]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <motion.img
  src="/logo.png"
  alt="NovaShop"
  className="w-14 h-14 object-contain"
/>

          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="text-3xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          >
            NovaShop
          </motion.h1>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-gray-300 hover:text-white transition group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative hover:text-cyan-400 transition"
          >
            <FiShoppingCart size={24} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Login / User */}
          {user ? (
            <div className="flex items-center gap-4">

              <div className="flex items-center gap-2">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <span className="text-gray-300">
                  Hi,{" "}
                  <span className="font-semibold text-cyan-400">
                    {user.name}
                  </span>
                </span>

              </div>

              <button
                onClick={logout}
                className="rounded-full border border-red-500 px-5 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2.5 font-medium transition hover:scale-105"
            >
              <FiUser />
              Login
            </Link>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="md:hidden bg-[#111] border-t border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-5">

              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-cyan-400"
              >
                🛒 Cart ({cart.length})
              </Link>

              {user ? (
                <>
                  <div className="text-center font-semibold text-cyan-400">
                    Hi, {user.name}
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="rounded-full border border-red-500 py-3 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 py-3 text-center font-medium"
                >
                  Login
                </Link>
              )}

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </nav>
  );
};

export default Navbar;