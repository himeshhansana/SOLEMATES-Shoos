import React from 'react';
import { Button } from '../../ui/Button';
import { MailIcon } from 'lucide-react';
export function Newsletter() {
  return <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and be the first to know about new
            products, special offers, and exclusive promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow relative">
              <MailIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input type="email" placeholder="Enter your email address" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <Button type="submit" variant="primary" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </section>;
}