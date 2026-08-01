const Product = () => {
  return (
    <div className="min-h-screen bg-[#09090b] px-6 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#18181b]/90 p-8">
          <div className="h-80 rounded-[1.5rem] bg-gradient-to-br from-[#8B5CF6]/20 via-[#18181b] to-[#EC4899]/20" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#06B6D4]">Featured Product</p>
          <h2 className="mt-3 text-4xl font-semibold">Aurora Jacket</h2>
          <p className="mt-4 text-lg text-zinc-300">
            A sculptural outerwear piece designed with premium texture and a refined silhouette.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-semibold text-[#06B6D4]">$249</span>
            <button className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] px-6 py-3 font-medium text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
