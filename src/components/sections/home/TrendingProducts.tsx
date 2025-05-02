import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../ui/ProductCard';
import { Button } from '../../ui/Button';
import { newArrivals } from '../../../utils/mockData';
export function TrendingProducts() {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            <p className="text-gray-600 mt-2">
              The latest additions to our collection
            </p>
          </div>
          <Link to="/products?collection=new" className="mt-4 sm:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View All
            <ArrowRightIcon size={18} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </section>;
}