'use client';

import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Men\'s Streetwear',
    description: 'Urban fashion for the modern man',
    image: '/api/placeholder/400/500',
    href: '/men/streetwear'
  },
  {
    id: 2,
    name: 'Women\'s Casual',
    description: 'Effortless style meets comfort',
    image: '/api/placeholder/400/500',
    href: '/women/casual'
  },
  {
    id: 3,
    name: 'Premium Hoodies',
    description: 'Luxury comfort wear',
    image: '/api/placeholder/400/500',
    href: '/hoodies'
  },
  {
    id: 4,
    name: 'Designer Sneakers',
    description: 'Step up your shoe game',
    image: '/api/placeholder/400/500',
    href: '/sneakers'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SHOP BY CATEGORY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of premium streetwear and casual fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
