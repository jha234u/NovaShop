import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import api from "../services/api";
import Loader from "../components/Loader";
const Products = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");

        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  let filteredProducts = [...products];

  // Search
  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-center text-5xl font-black">
            Our Products
          </h1>

          <p className="mt-4 text-center text-gray-400">
            Explore our premium collection
          </p>

          {/* Search */}
          <div className="mt-10 flex justify-center">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-xl rounded-full border border-white/10 bg-[#151515] px-6 py-4 outline-none transition focus:border-cyan-400"
            />
          </div>

          {/* Layout */}
          <div className="mt-14 grid gap-8 lg:grid-cols-4">

            {/* Sidebar */}
            <div>
              <FilterSidebar
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sort={sort}
                setSort={setSort}
              />
            </div>

            {/* Products */}
            <div className="lg:col-span-3">

              <p className="mb-6 text-gray-400">
                Showing {filteredProducts.length} Products
              </p>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">

                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    />
                  ))
                ) : (
                  <div className="col-span-full rounded-3xl border border-white/10 bg-[#111] p-12 text-center">
                    <h2 className="text-3xl font-bold">
                      No Products Found
                    </h2>

                    <p className="mt-4 text-gray-400">
                      Try changing your search or filters.
                    </p>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;