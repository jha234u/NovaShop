import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-black text-center mb-4">
            Shopping Cart
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Review your selected products
          </p>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-3">
                Your cart is empty 🛒
              </h2>

              <p className="text-gray-400">
                Add some amazing products to get started.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">

                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-white/10 bg-[#111] p-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-32 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <h2 className="text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-400 mt-2">
                        ₹{item.price.toLocaleString()}
                      </p>

                      <div className="flex items-center gap-3 mt-5">

                        <button
                          onClick={() => decreaseQuantity(item._id)}
                          className="p-2 rounded-full bg-zinc-800 hover:bg-purple-600"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="font-bold text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item._id)}
                          className="p-2 rounded-full bg-zinc-800 hover:bg-purple-600"
                        >
                          <Plus size={18} />
                        </button>

                      </div>

                    </div>

                    <div className="flex flex-col items-end gap-5">

                      <span className="text-cyan-400 text-xl font-bold">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>

                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <Trash2 size={22} />
                      </button>

                    </div>

                  </div>
                ))}

              </div>

              {/* Summary */}
              <div className="rounded-3xl border border-white/10 bg-[#111] p-8 h-fit">

                <h2 className="text-2xl font-bold mb-8">
                  Order Summary
                </h2>

                <div className="flex justify-between text-lg mb-5">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-lg mb-8">
                  <span>Total</span>

                  <span className="text-cyan-400 font-bold">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>

                <Link
                    to="/checkout"
                  className="block w-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 text-center font-bold hover:scale-105 transition"
                >
                  Proceed to Checkout
                </Link>

              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;