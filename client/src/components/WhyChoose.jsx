import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Fast and free delivery on all orders.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    desc: "100% secure payments and data protection.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    desc: "Pay using cards, UPI, or wallets.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our team is always ready to help.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-28 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-4"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            NovaShop
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Everything you need for a premium shopping experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-500/40 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
