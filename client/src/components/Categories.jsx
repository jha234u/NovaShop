import { motion } from "framer-motion";
import {
  Laptop,
  Shirt,
  Smartphone,
  Headphones,
  Gamepad2,
  Sofa,
} from "lucide-react";

const categories = [
  {
    title: "Electronics",
    icon: Laptop,
    color: "from-purple-500 to-cyan-500",
  },
  {
    title: "Fashion",
    icon: Shirt,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Mobiles",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Accessories",
    icon: Headphones,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    color: "from-green-500 to-cyan-500",
  },
  {
    title: "Furniture",
    icon: Sofa,
    color: "from-orange-500 to-pink-500",
  },
];

const Categories = () => {
  return (
    <section className="py-28 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-4"
        >
          Shop by
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Category
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Explore our premium collections
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 cursor-pointer group"
              >

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r ${item.color}`}
                ></div>

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-8`}
                >
                  <Icon size={40} color="white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  Browse premium {item.title.toLowerCase()} products.
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Categories;
