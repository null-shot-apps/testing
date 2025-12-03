'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          ELEVATE YOUR
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            STYLE
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover premium streetwear and casual fashion that defines modern luxury
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/shop" 
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            SHOP NOW
          </Link>
          <Link 
            href="/collections" 
            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW COLLECTIONS
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80 delay-500"></div>
    </section>
  );
}
