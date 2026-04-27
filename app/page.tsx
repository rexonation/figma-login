"use client";

import React from "react";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-white px-6">
      
      {/* 1. Logo: Positioned at the top-left of the screen */}
      <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
          alt="Rexonation Logo" 
          className="h-8 w-auto sm:h-10"
        />
      </div>

      {/* 2. Centered Login Container */}
      <div className="w-full max-w-[400px] py-20 sm:py-0 animate-in fade-in duration-700">
        
        <h1 className="mb-10 text-center text-[28px] sm:text-[32px] font-medium tracking-tight text-gray-900">
          Sign in to Figma
        </h1>

        {/* Google Button */}
        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-base font-normal text-gray-900 transition-all hover:bg-gray-50 active:scale-[0.98]">
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-5"
          />
          Continue with Google
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-500 font-light">or</span>
          </div>
        </div>

        {/* Form Section */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Email
            </label>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-200 bg-[#f3f3f3] p-3.5 text-sm transition-all focus:border-black focus:bg-white focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Password
            </label>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full rounded-lg border border-gray-200 bg-[#f3f3f3] p-3.5 text-sm transition-all focus:border-black focus:bg-white focus:outline-none"
            />
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full rounded-lg bg-black py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
          >
            Log in
          </button>
        </form>

        {/* Links Section */}
        <nav className="mt-8 flex flex-col items-center space-y-4 text-[14px]">
          <a href="#" className="text-blue-500 hover:underline decoration-1">Use single sign-on</a>
          <a href="#" className="text-blue-500 hover:underline decoration-1">Reset password</a>
          <p className="pt-2 text-gray-500">
            No account? <a href="#" className="font-semibold text-blue-500 hover:underline">Create one</a>
          </p>
        </nav>
      </div>
    </main>
  );
}