import { motion } from "framer-motion";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090B] pt-28">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center min-h-screen">

        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 mb-6">
            🚀 New Collection 2026
          </span>

          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Shop
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Smarter.
            </span>
            Live Better.
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            Discover premium gadgets, fashion, electronics and accessories with
            fast delivery and secure shopping.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition">
              Shop Now
              <FiArrowRight />
            </button>

            <button className="flex items-center gap-2 px-7 py-4 rounded-full border border-purple-500 hover:bg-purple-500/20 transition">
              Explore
            </button>
          </div>

          <div className="flex gap-10 mt-14">
            <div>
              <h2 className="text-4xl font-bold">20K+</h2>
              <p className="text-gray-500">Customers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">500+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">4.9★</h2>
              <p className="text-gray-500">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mt-20 lg:mt-0"
        >
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -left-12 top-10 bg-zinc-900/80 backdrop-blur-xl border border-purple-500/20 p-5 rounded-3xl shadow-[0_0_40px_rgba(139,92,246,0.25)]"
          >
            <FiShoppingBag className="text-purple-400 text-4xl mb-2" />
            <p className="font-semibold">Premium Quality</p>
          </motion.div>

          <motion.img
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6 }}
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt="Product"
            className="w-[420px] rounded-[40px] shadow-[0_0_80px_rgba(139,92,246,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
