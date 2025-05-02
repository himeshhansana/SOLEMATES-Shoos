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
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="container px-4 py-4 mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          SOLE<span className="text-blue-600">MATES</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          <Link to="/" className="font-medium text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="font-medium text-gray-600 hover:text-blue-600">
            Shop
          </Link>
          <Link to="/contact" className="font-medium text-gray-600 hover:text-blue-600">
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
          <Link to="/cart" className="relative text-gray-600 hover:text-blue-600" aria-label="Shopping Cart">
            <ShoppingBagIcon size={20} />
            {itemCount > 0 && <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-2 -right-2">
              {itemCount}
            </span>}
          </Link>
          <button className="text-gray-600 md:hidden hover:text-blue-600 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
      {/* Search Bar */}
      {isSearchOpen && <div className="relative mt-4">
        <input type="text" placeholder="Search for products..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" autoFocus />
        <button className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2 hover:text-blue-600" aria-label="Search">
          <SearchIcon size={20} />
        </button>
      </div>}
      {/* Mobile Menu */}
      {isMenuOpen && <nav className="py-2 mt-4 border-t border-gray-200 md:hidden">
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
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>}
    </div>
  </header>;
}