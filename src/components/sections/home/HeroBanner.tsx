import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
export function HeroBanner() {
  return <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Stylish shoes" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            New Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Step Into <span className="text-blue-400">Style</span> This Season
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Discover our latest collection of premium footwear designed for
            comfort, performance, and style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Shop Now
              <ArrowRightIcon size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </section>;
}