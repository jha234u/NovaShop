const Cart = () => {
  return (
    <div className="min-h-screen bg-[#09090b] px-6 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold">Your cart</h2>
        <p className="mt-2 text-zinc-400">Your selected pieces are waiting for you.</p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#18181b]/90 p-8">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="font-semibold">Aurora Jacket</p>
              <p className="text-sm text-zinc-400">Qty: 1</p>
            </div>
            <p className="text-[#06B6D4]">$249</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
