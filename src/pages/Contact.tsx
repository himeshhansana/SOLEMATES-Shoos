import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, MessageSquareIcon } from 'lucide-react';
export function Contact() {
  return <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? Our team is here to help. Fill
            out the form below or reach out to us using one of the contact
            methods.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea id="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  </div>
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MailIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">support@solemates.com</p>
                    <p className="text-gray-600">info@solemates.com</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <PhoneIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-600">(123) 456-7891</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPinIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Shoe Lane
                      <br />
                      Footwear City, FC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <ClockIcon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg shadow-sm p-8 text-white">
              <div className="flex items-center mb-4">
                <MessageSquareIcon size={24} className="mr-2" />
                <h2 className="text-xl font-bold">Live Chat</h2>
              </div>
              <p className="mb-4">
                Need immediate assistance? Chat with our customer service team
                in real-time.
              </p>
              <Button variant="outline" size="md" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Start Chat
              </Button>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Our Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600">
                Map placeholder - would integrate with Google Maps or similar
                service
              </p>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping,
              returns, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                How long does shipping take?
              </h3>
              <p className="text-gray-600">
                Standard shipping typically takes 3-5 business days within the
                continental US. Express shipping options are available for 1-2
                day delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day return policy on all unworn items. Returns are
                free and can be initiated through your account or by contacting
                customer service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                How do I find my shoe size?
              </h3>
              <p className="text-gray-600">
                We provide a detailed size guide for all our products. You can
                find the size guide link on each product page under the size
                selection option.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to many countries worldwide. International shipping
                rates and delivery times vary by location. Please check our
                shipping policy for details.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
}