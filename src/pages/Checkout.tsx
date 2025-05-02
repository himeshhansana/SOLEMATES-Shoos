import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, LockIcon, CheckIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';
export function Checkout() {
  const {
    items,
    subtotal
  } = useCart();
  const [step, setStep] = useState(1);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const handleNextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  return <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="flex flex-col items-center relative z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step > 1 ? <CheckIcon size={16} /> : 1}
            </div>
            <span className={`text-sm ${step === 1 ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
              Shipping
            </span>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step > 2 ? <CheckIcon size={16} /> : 2}
            </div>
            <span className={`text-sm ${step === 2 ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
              Payment
            </span>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              3
            </div>
            <span className={`text-sm ${step === 3 ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
              Confirmation
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Step 1: Shipping */}
            {step === 1 && <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-6">Shipping Information</h2>
                {/* Contact Information */}
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                  </div>
                </div>
                {/* Shipping Address */}
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-4">
                    Shipping Address
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address*
                      </label>
                      <input type="text" id="address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City*
                      </label>
                      <input type="text" id="city" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State/Province*
                      </label>
                      <input type="text" id="state" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Zip/Postal Code*
                      </label>
                      <input type="text" id="zipCode" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country*
                      </label>
                      <select id="country" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Shipping Method */}
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-4">
                    Shipping Method
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="shippingMethod" value="standard" className="text-blue-600 focus:ring-blue-500" defaultChecked />
                      <div className="ml-3 flex-grow">
                        <div className="font-medium">Standard Shipping</div>
                        <div className="text-sm text-gray-500">
                          3-5 business days
                        </div>
                      </div>
                      <div className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="shippingMethod" value="express" className="text-blue-600 focus:ring-blue-500" />
                      <div className="ml-3 flex-grow">
                        <div className="font-medium">Express Shipping</div>
                        <div className="text-sm text-gray-500">
                          1-2 business days
                        </div>
                      </div>
                      <div className="font-medium">$19.99</div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Link to="/cart">
                    <Button variant="outline" size="lg">
                      Back to Cart
                    </Button>
                  </Link>
                  <Button variant="primary" size="lg" onClick={handleNextStep}>
                    Continue to Payment
                  </Button>
                </div>
              </div>}
            {/* Step 2: Payment */}
            {step === 2 && <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-6">Payment Information</h2>
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="paymentMethod" value="creditCard" className="text-blue-600 focus:ring-blue-500" defaultChecked />
                      <div className="ml-3 flex-grow">
                        <div className="font-medium">Credit or Debit Card</div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="bg-gray-100 rounded px-2 py-1">
                          <span className="text-xs">Visa</span>
                        </div>
                        <div className="bg-gray-100 rounded px-2 py-1">
                          <span className="text-xs">MC</span>
                        </div>
                        <div className="bg-gray-100 rounded px-2 py-1">
                          <span className="text-xs">Amex</span>
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="paymentMethod" value="paypal" className="text-blue-600 focus:ring-blue-500" />
                      <div className="ml-3 flex-grow">
                        <div className="font-medium">PayPal</div>
                      </div>
                      <div className="bg-gray-100 rounded px-2 py-1">
                        <span className="text-xs">PayPal</span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* Credit Card Information */}
                <div className="mb-6 border-t border-gray-200 pt-6">
                  <div className="flex items-center mb-4">
                    <CreditCardIcon size={20} className="text-gray-500 mr-2" />
                    <h3 className="text-base font-medium">Card Details</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card*
                      </label>
                      <input type="text" id="cardName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number*
                      </label>
                      <input type="text" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date*
                      </label>
                      <input type="text" id="expiryDate" placeholder="MM/YY" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV*
                      </label>
                      <input type="text" id="cvv" placeholder="123" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                  </div>
                </div>
                {/* Billing Address */}
                <div className="mb-6">
                  <h3 className="text-base font-medium mb-2">
                    Billing Address
                  </h3>
                  <label className="flex items-center mb-4">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 mr-2" defaultChecked />
                    <span className="text-sm">Same as shipping address</span>
                  </label>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={handlePreviousStep}>
                    Back to Shipping
                  </Button>
                  <Button variant="primary" size="lg" onClick={handleNextStep}>
                    Place Order
                  </Button>
                </div>
                <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                  <LockIcon size={16} className="mr-1" />
                  Your payment information is secure and encrypted
                </div>
              </div>}
            {/* Step 3: Confirmation */}
            {step === 3 && <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You for Your Order!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your order #12345 has been placed successfully.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
                  <h3 className="font-medium mb-2">Order Details</h3>
                  <p className="text-sm text-gray-600">
                    An email confirmation has been sent to your email address.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Estimated delivery:{' '}
                    <span className="font-medium">June 15 - June 18, 2023</span>
                  </p>
                </div>
                <Link to="/products">
                  <Button variant="primary" size="lg">
                    Continue Shopping
                  </Button>
                </Link>
              </div>}
          </div>
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              {/* Items */}
              <div className="max-h-80 overflow-y-auto mb-4">
                {items.map(item => <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex py-3 border-b border-gray-200 last:border-b-0">
                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="text-sm font-medium">
                        {item.product.name}
                      </h4>
                      <div className="text-xs text-gray-500 mt-1">
                        <span>Size: {item.size}</span>
                        <span className="mx-1">|</span>
                        <span>Color: {item.color}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        <span className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>)}
              </div>
              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              {/* Promo Code */}
              {step < 3 && <div className="mb-4">
                  <label htmlFor="promoCheckout" className="block text-sm font-medium text-gray-700 mb-1">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input type="text" id="promoCheckout" placeholder="Enter code" className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className="bg-gray-900 text-white px-3 py-2 text-sm rounded-r-md hover:bg-gray-800 transition duration-200">
                      Apply
                    </button>
                  </div>
                </div>}
              {/* Secure Checkout Badge */}
              <div className="flex items-center justify-center text-sm text-gray-500 mt-6">
                <LockIcon size={16} className="mr-1" />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}