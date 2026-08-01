import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-28 px-6 bg-[#09090B]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[40px] overflow-hidden relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-20 blur-3xl"></div>

        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] px-10 py-20 text-center">

          <h2 className="text-5xl font-black">
            Stay Updated with
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}NovaShop
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Get exclusive offers, latest arrivals and exciting discounts
            delivered straight to your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">

            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full md:w-[420px] px-6 py-4 rounded-full bg-zinc-900 border border-white/10 outline-none"
            />

            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition">

              Subscribe

              <Send size={18} />

            </button>

          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Newsletter;
