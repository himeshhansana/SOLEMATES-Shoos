import React from 'react';
import { StarIcon } from 'lucide-react';
import { testimonials } from '../../../utils/mockData';
export function Testimonials() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            customers!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />)}
              </div>
              {/* Quote */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.comment}"
              </p>
              {/* Customer */}
              <div className="flex items-center">
                {testimonial.image && <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  {testimonial.location && <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}