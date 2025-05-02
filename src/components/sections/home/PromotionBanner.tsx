import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { TruckIcon, RefreshCwIcon, ShieldIcon } from 'lucide-react';
export function PromotionBanner() {
  return <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get 20% Off on Selected Summer Styles
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Use code SUMMER20 at checkout. Offer valid until August 31st.
            </p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Shop The Sale
            </Button>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Summer sale shoes" className="rounded-lg shadow-lg" />
            <div className="absolute -top-5 -right-5 bg-red-500 text-white text-xl font-bold w-20 h-20 rounded-full flex items-center justify-center">
              20% OFF
            </div>
          </div>
        </div>
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-blue-500">
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <TruckIcon size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Free Shipping</h3>
              <p className="text-blue-100">On all orders over $75</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <RefreshCwIcon size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Easy Returns</h3>
              <p className="text-blue-100">30-day return policy</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <ShieldIcon size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Secure Checkout</h3>
              <p className="text-blue-100">100% protected payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}