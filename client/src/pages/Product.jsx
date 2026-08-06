import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const filteredProducts = category
  ? products.filter(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase()
    )
  : products;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);

        if (data.success) {
          setProduct(data.product);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white text-3xl">
          Loading...
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white text-3xl">
          Product Not Found
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#09090b] px-6 py-28 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/products"
            className="mb-8 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Product Image */}
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#18181b] p-6">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/800x800/18181b/FFFFFF?text=NovaShop";
                }}
              />

            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">

              <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
                {product.category}
              </span>

              <h1 className="mt-4 text-5xl font-black">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-2 text-yellow-400">
                <Star fill="currentColor" size={20} />
                <span className="text-lg">
                  ⭐ {product.rating} (Customer Rating) / 5
                </span>
              </div>

              <p className="mt-8 text-lg text-gray-300 leading-8">
                {product.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-black text-cyan-400">
                  ₹{product.price.toLocaleString()}
                </span>
              </div>

              <div className="mt-4 text-gray-400">
                <p
  className={`mt-4 font-semibold ${
    product.stock > 0 ? "text-green-400" : "text-red-500"
  }`}
>
  {product.stock > 0
    ? `In Stock (${product.stock})`
    : "Out of Stock"}
</p>
              </div>

{product.stock > 0 ? (
  <button
    onClick={() => addToCart(product)}
    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 transition hover:scale-105"
  >
    <ShoppingCart size={18} />
    Add to Cart
  </button>
) : (
  <button
    disabled
    className="rounded-full bg-gray-700 px-6 py-3 cursor-not-allowed"
  >
    Out of Stock
  </button>
)}

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;