import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, ShoppingBagIcon, HeartIcon, ShareIcon, CheckIcon, TruckIcon, RefreshCwIcon, ShieldIcon, MailIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { featuredProducts, allProducts } from '../utils/mockData';
import { useCart } from '../context/CartContext';
export function ProductDetail() {
  const {
    id
  } = useParams();
  const {
    addToCart
  } = useCart();
  // Find product by ID or use the first product as fallback
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
    alert('Product added to cart!');
  };
  const relatedProducts = featuredProducts.filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(tag => product.tags.includes(tag)))).slice(0, 4);
  return <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex">
            <li className="hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="hover:text-blue-600">
              <Link to="/products">Products</Link>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-gray-600">{product.name}</li>
          </ol>
        </nav>
        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Images */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="relative pb-[100%] overflow-hidden rounded-lg mb-4">
                <img src={product.images[activeImageIndex]} alt={product.name} className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => <button key={index} onClick={() => setActiveImageIndex(index)} className={`relative pb-[100%] overflow-hidden rounded-md ${index === activeImageIndex ? 'ring-2 ring-blue-500' : 'hover:opacity-80'}`}>
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="absolute inset-0 w-full h-full object-cover object-center" />
                  </button>)}
              </div>
            </div>
            {/* Product Info */}
            <div className="p-6">
              <div className="mb-2">
                <span className="text-sm text-gray-500 font-medium">
                  {product.brand}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />)}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              {/* Price */}
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && <span className="text-lg text-gray-500 line-through ml-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>}
                {product.discountPercentage && <span className="ml-2 bg-red-100 text-red-700 text-sm font-semibold px-2 py-0.5 rounded">
                    {product.discountPercentage}% OFF
                  </span>}
              </div>
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Color: {selectedColor}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => {
                  // Map color names to tailwind classes
                  const colorClass = {
                    Black: 'bg-black',
                    White: 'bg-white border border-gray-300',
                    Red: 'bg-red-600',
                    Blue: 'bg-blue-600',
                    Green: 'bg-green-600',
                    Gray: 'bg-gray-500',
                    Navy: 'bg-indigo-900',
                    Pink: 'bg-pink-500',
                    Purple: 'bg-purple-600',
                    Yellow: 'bg-yellow-400',
                    Brown: 'bg-yellow-800',
                    Orange: 'bg-orange-500'
                  }[color] || 'bg-gray-500';
                  return <button key={color} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full ${colorClass} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`} title={color} aria-label={`Select ${color} color`} />;
                })}
                </div>
              </div>
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Size</h3>
                  <button className="text-sm text-blue-600 hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.sizes.map(size => <button key={size} onClick={() => setSelectedSize(size)} className={`py-2 border rounded-md ${selectedSize === size ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-gray-400'}`}>
                      {size}
                    </button>)}
                </div>
              </div>
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100" aria-label="Decrease quantity">
                    −
                  </button>
                  <input type="number" min="1" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 h-10 border-t border-b border-gray-300 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100" aria-label="Increase quantity">
                    +
                  </button>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button variant="primary" size="lg" fullWidth onClick={handleAddToCart} className="flex items-center justify-center">
                  <ShoppingBagIcon size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" fullWidth className="flex items-center justify-center">
                  <HeartIcon size={18} className="mr-2" />
                  Add to Wishlist
                </Button>
              </div>
              {/* Shipping Info */}
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex items-start mb-3">
                  <TruckIcon size={18} className="mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Free shipping</p>
                    <p className="text-sm text-gray-600">
                      Free standard shipping on orders over $75
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-3">
                  <RefreshCwIcon size={18} className="mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Easy 30-day returns</p>
                    <p className="text-sm text-gray-600">
                      Not the right fit? No problem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldIcon size={18} className="mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Secure checkout</p>
                    <p className="text-sm text-gray-600">
                      100% protected payment processing
                    </p>
                  </div>
                </div>
              </div>
              {/* Share */}
              <div className="flex items-center">
                <span className="text-gray-600 mr-3">Share:</span>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share on Facebook">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share on Twitter">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16-1.9 1.5-4.3 2.36-6.9 2.36-.45 0-.9-.02-1.34-.08 2.46 1.56 5.37 2.5 8.5 2.5 10.2 0 15.75-8.42 15.75-15.75 0-.24 0-.48-.02-.7.67-.5 1.48-1.3 2.04-2.1z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share on Pinterest">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share via Email">
                    <MailIcon size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button onClick={() => setActiveTab('description')} className={`px-6 py-3 font-medium text-sm ${activeTab === 'description' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Description
              </button>
              <button onClick={() => setActiveTab('features')} className={`px-6 py-3 font-medium text-sm ${activeTab === 'features' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Features
              </button>
              <button onClick={() => setActiveTab('reviews')} className={`px-6 py-3 font-medium text-sm ${activeTab === 'reviews' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Reviews ({product.reviewCount})
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'description' && <div>
                  <p className="text-gray-600">{product.description}</p>
                </div>}
              {activeTab === 'features' && <div>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => <li key={index} className="flex items-start">
                        <CheckIcon size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>}
              {activeTab === 'reviews' && <div>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="text-5xl font-bold text-gray-900">
                        {product.rating}
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />)}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Based on {product.reviewCount} reviews
                      </div>
                    </div>
                    <div className="flex-grow">
                      {/* Rating bars */}
                      {[5, 4, 3, 2, 1].map(rating => {
                    const percentage = Math.floor(Math.random() * 100);
                    return <div key={rating} className="flex items-center mb-1">
                            <div className="text-sm text-gray-600 w-4">
                              {rating}
                            </div>
                            <StarIcon size={12} className="text-yellow-400 ml-1 mr-2" fill="currentColor" />
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-yellow-400 h-2 rounded-full" style={{
                          width: `${percentage}%`
                        }}></div>
                            </div>
                            <div className="text-xs text-gray-500 w-8">
                              {percentage}%
                            </div>
                          </div>;
                  })}
                    </div>
                    <div className="ml-4">
                      <Button variant="outline" size="md">
                        Write a Review
                      </Button>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-bold text-lg mb-4">Customer Reviews</h3>
                    {/* Sample reviews */}
                    {[1, 2, 3].map(reviewId => <div key={reviewId} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">John D.</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} className={`${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < 4 ? 'currentColor' : 'none'} />)}
                              <span className="text-xs text-gray-500 ml-1">
                                Verified Purchase
                              </span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {new Date().toLocaleDateString()}
                          </div>
                        </div>
                        <h5 className="font-medium mb-2">
                          Great shoes, very comfortable!
                        </h5>
                        <p className="text-gray-600 text-sm mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris.
                        </p>
                        <button className="text-sm text-blue-600 hover:underline">
                          Helpful (3)
                        </button>
                      </div>)}
                    <Button variant="outline" size="md" className="mt-4">
                      Load More Reviews
                    </Button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    </div>;
}