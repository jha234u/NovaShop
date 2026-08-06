import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/600x600/18181b/FFFFFF?text=NovaShop";
          }}
        />

        <button className="absolute right-4 top-4 rounded-full bg-black/50 p-2 backdrop-blur hover:bg-pink-500">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-yellow-400">
          <Star size={16} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-400">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            ₹{product.price.toLocaleString()}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 transition hover:scale-105"
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>

        <Link
          to={`/product/${product._id}`}
          className="mt-4 block rounded-xl border border-cyan-500 py-3 text-center font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;