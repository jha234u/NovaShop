const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6 sticky top-28">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Filters
      </h2>

      {/* Category */}
      <div className="mb-6">
        <label className="mb-2 block text-sm text-gray-400">
          Category
        </label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#181818] p-3 text-white outline-none focus:border-cyan-400"
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Sort By
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#181818] p-3 text-white outline-none focus:border-cyan-400"
        >
          <option value="">Default</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;