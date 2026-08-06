import { useEffect, useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import api from "../services/api";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");

        console.log("API Response:", data);

        if (data.success) {
          setProducts(data.products.slice(0, 4));
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#09090B] text-white">
        <h2 className="text-center text-4xl font-bold">
          Loading Products...
        </h2>
      </section>
    );
  }

  console.log(products);
console.log(products.length);

  return (
    <section className="py-24 bg-[#09090B] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-3">
          Featured{" "}
          <span className="text-cyan-400">
            Products
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Hand-picked premium products for you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <motion.div
              key={product._id}
              whileHover={{ y: -8 }}
              className="rounded-3xl overflow-hidden bg-[#111] border border-white/10"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x600/111827/FFFFFF?text=NovaShop";
                }}
              />

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    {product.rating}
                  </div>

                  <Heart
                    size={20}
                    className="cursor-pointer hover:text-pink-500"
                  />

                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2 h-10 overflow-hidden">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-cyan-400 text-2xl font-bold">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full">
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