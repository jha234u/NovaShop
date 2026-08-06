import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">

          <CheckCircle
            size={100}
            className="mx-auto text-green-400 mb-8"
          />

          <h1 className="text-5xl font-black">
            Order Placed!
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Thank you for shopping with NovaShop.
            Your order has been placed successfully.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <Link
              to="/products"
              className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold hover:scale-105 transition"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="rounded-full border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              Home
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Success;