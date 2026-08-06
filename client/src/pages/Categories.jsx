import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
  },
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
  },
];

const Categories = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-black text-center mb-3">
            Shop by Category
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Choose your favourite category
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Categories;