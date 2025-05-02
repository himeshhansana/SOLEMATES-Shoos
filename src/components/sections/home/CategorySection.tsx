import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../../utils/mockData';
export function CategorySection() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop By Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect shoes for every occasion. Browse our collections
            categorized for your convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm mt-1">
                  {category.productCount} Products
                </p>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
}