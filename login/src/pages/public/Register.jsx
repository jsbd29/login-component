import React from 'react'

const Register = () => {
  return (
  <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 font-sans selection:bg-white/20">

  <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gray-400/5 p-8 shadow-2xl backdrop-blur-xl">
    
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
      <p className="mt-2 text-sm text-gray-400">Join the community and start building.</p>
    </div>

    <form className="space-y-5">
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">Full Name</label>
        <input 
          type="text" 
          placeholder="John Doe" 
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">Email Address</label>
        <input 
          type="email" 
          placeholder="name@example.com" 
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-400">Password</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20"
        />
      </div>

      <button 
        type="submit" 
        className="group relative mt-4 flex w-full items-center justify-center rounded-xl bg-white/10 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.98]"
      >
        Sign Up
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </form>

    <div className="mt-8 text-center border-t border-white/5 pt-6">
      <p className="text-xs text-gray-500">
        Already have an account? 
        <a href="#" className="ml-1 font-medium text-white hover:underline decoration-white/30">Sign In</a>
      </p>
    </div>

  </div>
</div>
  )
}

export default Register