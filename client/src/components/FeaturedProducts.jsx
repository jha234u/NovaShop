import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import api from "../services/api";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-28 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-4">
          Featured
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Products
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Hand-picked premium products for you
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-6 h-96 animate-pulse" />
            ))
          ) : products.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">No products available right now.</p>
          ) : products.map((product, index) => (

            <motion.div
              key={product._id || product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group"
            >

              <div className="relative overflow-hidden">

                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-red-500 text-sm font-semibold">
                  -20%
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

                <button className="absolute top-5 right-5 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-pink-500 transition hover:scale-110">
                  <Heart size={18} />
                </button>

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <Star size={18} fill="currentColor" />
                  {product.rating}
                </div>

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-2xl font-bold text-cyan-400">
                    ${product.price}
                  </span>

                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition">

                    <ShoppingCart size={18} />

                    Add

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
