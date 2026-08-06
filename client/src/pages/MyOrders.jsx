import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user) return;

        const { data } = await api.get(`/orders/${user._id}`);

        if (data.success) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl font-black mb-3">
            My Orders
          </h1>

          <p className="text-gray-400 mb-10">
            View all your previous purchases.
          </p>

          {loading ? (
            <h2 className="text-center text-2xl">
              Loading...
            </h2>
          ) : orders.length === 0 ? (
            <div className="rounded-3xl bg-[#111] border border-white/10 p-10 text-center">
              <h2 className="text-2xl font-bold">
                No Orders Yet
              </h2>

              <p className="mt-3 text-gray-400">
                Start shopping to place your first order.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="rounded-3xl bg-[#111] border border-white/10 p-8"
                >
                  <div className="flex justify-between flex-wrap gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-bold">
                        Order #{order._id.slice(-6).toUpperCase()}
                      </h2>

                      <p className="text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400 font-semibold">
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-white/10 pb-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover"
                          />

                          <div>
                            <h3 className="font-semibold">
                              {item.name}
                            </h3>

                            <p className="text-gray-400">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>

                        <h3 className="font-bold text-cyan-400">
                          ₹{item.price * item.quantity}
                        </h3>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span className="text-green-400">
                      ₹{order.totalPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default MyOrders;