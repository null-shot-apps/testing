'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { CartItem, Product } from '@/types';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product & { size: string; color: string }) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.size === product.size);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.size === size)));
  };

  const updateQuantity = (productId: number, size: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId, size);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItems={cartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={addToCart} />
      <Newsletter />
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}


