'use client';

import { useState } from 'react';
import Link from 'next/link';

import { CartItem } from '@/types';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

export default function Header({ cartItems, onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              LUXE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/men" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Men
            </Link>
            <Link href="/women" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Women
            </Link>
            <Link href="/streetwear" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Streetwear
            </Link>
            <Link href="/sale" className="text-red-600 hover:text-red-700 font-medium transition-colors">
              Sale
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account */}
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="text-gray-700 hover:text-gray-900 transition-colors relative"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/men" className="text-gray-700 hover:text-gray-900 font-medium">
                Men
              </Link>
              <Link href="/women" className="text-gray-700 hover:text-gray-900 font-medium">
                Women
              </Link>
              <Link href="/streetwear" className="text-gray-700 hover:text-gray-900 font-medium">
                Streetwear
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 font-medium">
                Sale
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

