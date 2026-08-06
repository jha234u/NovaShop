import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

import api from "../services/api";

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const orderData = {
        user: user._id,

        items: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),

        shippingAddress: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          pincode: form.pincode,
        },

        paymentMethod: form.payment,

        totalPrice,
      };

      const { data } = await api.post("/orders", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        clearCart();
        alert("🎉 Order Placed Successfully!");
        navigate("/my-orders");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Failed to place order."
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-black text-center mb-4">
            Checkout
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Complete your order
          </p>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Checkout Form */}

            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 rounded-3xl bg-[#111] border border-white/10 p-8 space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none"
              />

              <textarea
                rows={4}
                name="address"
                placeholder="Shipping Address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none"
              />

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-[#181818] px-5 py-4 outline-none"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-[#181818] px-5 py-4 outline-none"
                />

              </div>

              <select
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none"
              >
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>UPI</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 font-bold transition hover:scale-105"
              >
                Place Order
              </button>
            </form>

            {/* Order Summary */}

            <div className="rounded-3xl bg-[#111] border border-white/10 p-8 h-fit">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              {cart.length === 0 ? (
                <p className="text-gray-400">
                  Your cart is empty.
                </p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between mb-4"
                    >
                      <span>
                        {item.name} × {item.quantity}
                      </span>

                      <span>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}

                  <hr className="border-white/10 my-6" />

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span className="text-cyan-400">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </>
              )}

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Checkout;