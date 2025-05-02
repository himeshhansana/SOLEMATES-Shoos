import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="bg-blue-600 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="text-white opacity-90 mt-1">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-l-md focus:outline-none" required />
                <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-r-md font-medium transition duration-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SOLEMATES</h3>
            <p className="mb-4">
              Premium footwear for every occasion. Quality, comfort, and style
              for all your adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=men" className="hover:text-white transition duration-200">
                  Men's Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="hover:text-white transition duration-200">
                  Women's Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=kids" className="hover:text-white transition duration-200">
                  Kids' Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=sports" className="hover:text-white transition duration-200">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/products?collection=new" className="hover:text-white transition duration-200">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?sale=true" className="hover:text-white transition duration-200">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-white transition duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition duration-200">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-white transition duration-200">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-white transition duration-200">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Shoe Lane, Footwear City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2 flex-shrink-0" />
                <span>support@solemates.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 SOLEMATES. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}