import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ShoppingBagIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {
    itemCount
  } = useCart();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            SOLE<span className="text-blue-600">MATES</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600 font-medium">
              Shop
            </Link>
            <Link to="/products?category=men" className="text-gray-600 hover:text-blue-600 font-medium">
              Men
            </Link>
            <Link to="/products?category=women" className="text-gray-600 hover:text-blue-600 font-medium">
              Women
            </Link>
            <Link to="/products?category=kids" className="text-gray-600 hover:text-blue-600 font-medium">
              Kids
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-gray-600 hover:text-blue-600 focus:outline-none" aria-label="Search">
              <SearchIcon size={20} />
            </button>
            <Link to="/account" className="text-gray-600 hover:text-blue-600" aria-label="My Account">
              <UserIcon size={20} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-blue-600 relative" aria-label="Shopping Cart">
              <ShoppingBagIcon size={20} />
              {itemCount > 0 && <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>}
            </Link>
            <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
        {/* Search Bar */}
        {isSearchOpen && <div className="mt-4 relative">
            <input type="text" placeholder="Search for products..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" autoFocus />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600" aria-label="Search">
              <SearchIcon size={20} />
            </button>
          </div>}
        {/* Mobile Menu */}
        {isMenuOpen && <nav className="md:hidden mt-4 py-2 border-t border-gray-200">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/products?category=men" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                  Men
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                  Women
                </Link>
              </li>
              <li>
                <Link to="/products?category=kids" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>}
      </div>
    </header>;
}