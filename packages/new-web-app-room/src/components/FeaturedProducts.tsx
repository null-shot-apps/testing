'use client';

import { useState } from 'react';
import { Product } from '@/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Oversized Hoodie',
    price: 129,
    originalPrice: 159,
    image: '/api/placeholder/300/400',
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Streetwear Cargo Pants',
    price: 89,
    originalPrice: 119,
    image: '/api/placeholder/300/400',
    category: 'Pants',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Black', 'Olive', 'Khaki'],
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: 'Luxury Graphic Tee',
    price: 59,
    originalPrice: 79,
    image: '/api/placeholder/300/400',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    rating: 4.9,
    reviews: 203
  },
  {
    id: 4,
    name: 'Designer Bomber Jacket',
    price: 199,
    originalPrice: 249,
    image: '/api/placeholder/300/400',
    category: 'Jackets',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Olive'],
    rating: 4.7,
    reviews: 67
  },
  {
    id: 5,
    name: 'Premium Joggers',
    price: 79,
    originalPrice: 99,
    image: '/api/placeholder/300/400',
    category: 'Pants',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy'],
    rating: 4.5,
    reviews: 156
  },
  {
    id: 6,
    name: 'Luxury Sneakers',
    price: 159,
    originalPrice: 199,
    image: '/api/placeholder/300/400',
    category: 'Shoes',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Gray'],
    rating: 4.8,
    reviews: 91
  }
];

interface FeaturedProductsProps {
  onAddToCart: (product: Product & { size: string; color: string }) => void;
}

export default function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleAddToCart = (product: Product) => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    onAddToCart({
      ...product,
      size: selectedSize,
      color: selectedColor || product.colors[0]
    });
    
    setSelectedProduct(null);
    setSelectedSize('');
    setSelectedColor('');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium streetwear and casual fashion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                </div>
                
                {/* Sale Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    SALE
                  </div>
                )}

                {/* Quick Add Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-800"
                >
                  QUICK ADD
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  {product.colors.slice(0, 3).map((color) => (
                    <div
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                        color === 'Black' ? 'bg-black' :
                        color === 'White' ? 'bg-white' :
                        color === 'Gray' ? 'bg-gray-400' :
                        color === 'Navy' ? 'bg-blue-900' :
                        color === 'Olive' ? 'bg-green-700' :
                        color === 'Khaki' ? 'bg-yellow-600' :
                        'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Add Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <div className="grid grid-cols-5 gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 text-sm border rounded ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="flex space-x-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-black' : 'border-gray-300'
                      } ${
                        color === 'Black' ? 'bg-black' :
                        color === 'White' ? 'bg-white' :
                        color === 'Gray' ? 'bg-gray-400' :
                        color === 'Navy' ? 'bg-blue-900' :
                        color === 'Olive' ? 'bg-green-700' :
                        color === 'Khaki' ? 'bg-yellow-600' :
                        'bg-gray-300'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition-colors"
              >
                ADD TO CART - ${selectedProduct.price}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


