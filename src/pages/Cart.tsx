import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, PlusIcon, MinusIcon, ArrowLeftIcon, LockIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
export function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotal
  } = useCart();
  const shipping = subtotal > 75 ? 0 : 9.99;
  const total = subtotal + shipping;
  if (items.length === 0) {
    return <div className="bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>;
  }
  return <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-500">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>
              {items.map(item => <div key={`${item.product.id}-${item.size}-${item.color}`} className="p-4 border-b border-gray-200 last:border-b-0">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    {/* Product */}
                    <div className="md:col-span-3 flex items-center">
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">
                          {item.product.name}
                        </h3>
                        <div className="text-sm text-gray-500 mt-1">
                          <span>Size: {item.size}</span>
                          <span className="mx-2">|</span>
                          <span>Color: {item.color}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)} className="text-sm text-red-600 hover:text-red-800 flex items-center mt-2 md:hidden">
                          <TrashIcon size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="md:text-center">
                      <span className="text-gray-900">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </div>
                    {/* Quantity */}
                    <div className="flex items-center md:justify-center">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 hover:bg-gray-100" aria-label="Decrease quantity">
                          <MinusIcon size={16} />
                        </button>
                        <input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))} className="w-12 text-center border-x border-gray-300 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100" aria-label="Increase quantity">
                          <PlusIcon size={16} />
                        </button>
                      </div>
                    </div>
                    {/* Total */}
                    <div className="md:text-right flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-gray-400 hover:text-red-600 hidden md:block" aria-label="Remove item">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ArrowLeftIcon size={18} className="mr-1" />
                Continue Shopping
              </Link>
              <Button variant="outline" size="sm">
                Update Cart
              </Button>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && <div className="text-sm text-gray-500">
                    Add ${(75 - subtotal).toFixed(2)} more to get free shipping
                  </div>}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              {/* Promo Code */}
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">
                  Promo Code
                </label>
                <div className="flex">
                  <input type="text" id="promo" placeholder="Enter code" className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition duration-200">
                    Apply
                  </button>
                </div>
              </div>
              <Link to="/checkout">
                <Button variant="primary" size="lg" fullWidth>
                  Proceed to Checkout
                </Button>
              </Link>
              <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                <LockIcon size={16} className="mr-1" />
                Secure Checkout
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="font-medium mb-2">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="bg-gray-100 rounded px-2 py-1">
                    <span className="text-xs">Visa</span>
                  </div>
                  <div className="bg-gray-100 rounded px-2 py-1">
                    <span className="text-xs">Mastercard</span>
                  </div>
                  <div className="bg-gray-100 rounded px-2 py-1">
                    <span className="text-xs">PayPal</span>
                  </div>
                  <div className="bg-gray-100 rounded px-2 py-1">
                    <span className="text-xs">Apple Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}