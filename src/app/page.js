"use client";

import Link from "next/link";
import { Arvo } from "next/font/google";

const arvo = Arvo({ 
  subsets: ['latin'], 
  weight: '700'
});

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ 
          backgroundImage: "url('/home.jpg')",
          filter: "blur(5px) brightness(1)" 
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 text-center">
        <h1 className={`text-5xl ${arvo.className} text-sky-400 drop-shadow-lg`}>
          Manage Your Shop Easily
        </h1>
        <p className="mt-4 text-xl text-white drop-shadow-25g">
          Sign in to start tracking your inventory effortlessly
        </p>
        <div className="mt-8">
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}