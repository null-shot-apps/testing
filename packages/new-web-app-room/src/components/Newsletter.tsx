'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            STAY IN THE LOOP
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Be the first to know about new drops, exclusive sales, and style inspiration
          </p>

          {isSubscribed ? (
            <div className="bg-green-600 text-white py-4 px-6 rounded-lg inline-block">
              <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </div>
    </section>
  );
}
