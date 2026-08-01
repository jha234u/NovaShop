const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 py-20 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#18181b]/90 p-8 shadow-2xl shadow-black/30">
        <h2 className="text-3xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-sm text-zinc-400">Sign in to continue your premium journey.</p>

        <form className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0" placeholder="Email" />
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] px-4 py-3 font-medium text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
