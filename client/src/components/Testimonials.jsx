import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Verified Buyer",
    review:
      "NovaShop exceeded my expectations. Fast delivery, premium quality, and an amazing shopping experience!",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Tech Enthusiast",
    review:
      "The UI is beautiful and the products are exactly as described. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Happy Customer",
    review:
      "Customer support was excellent. I received my order quickly and loved the quality.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 px-6 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-4"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Customers Say
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Trusted by thousands of happy shoppers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 leading-7">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-lg">{review.name}</h3>
                <p className="text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
