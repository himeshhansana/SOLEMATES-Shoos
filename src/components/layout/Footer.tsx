import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
export function Footer() {
  return <footer className="text-gray-300 bg-gray-900">
      {/* Newsletter */}
      <div className="py-10 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="mt-1 text-white opacity-90">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-l-md focus:outline-none" required />
                <button type="submit" className="px-6 py-3 font-medium text-white transition duration-200 bg-gray-900 hover:bg-gray-800 rounded-r-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">SOLEMATES</h3>
            <p className="mb-4">
              Premium footwear for every occasion. Quality, comfort, and style
              for all your adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition duration-200 hover:text-white" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 transition duration-200 hover:text-white" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 transition duration-200 hover:text-white" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 transition duration-200 hover:text-white" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=men" className="transition duration-200 hover:text-white">
                  Men's Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="transition duration-200 hover:text-white">
                  Women's Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=kids" className="transition duration-200 hover:text-white">
                  Kids' Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=sports" className="transition duration-200 hover:text-white">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/products?collection=new" className="transition duration-200 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?sale=true" className="transition duration-200 hover:text-white">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="transition duration-200 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition duration-200 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="transition duration-200 hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="transition duration-200 hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="transition duration-200 hover:text-white">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon size={18} className="flex-shrink-0 mt-1 mr-2" />
                <span>123 Shoe Lane, Footwear City, Colombo</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="flex-shrink-0 mr-2" />
                <span>(+94) 74 025 9085</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="flex-shrink-0 mr-2" />
                <span>support@solemates.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p>&copy; 2025 SOLEMATES. All rights reserved.</p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <Link to="/privacy-policy" className="transition duration-200 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition duration-200 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}