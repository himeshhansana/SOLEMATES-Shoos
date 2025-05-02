import React, { useState } from 'react';
import { UserIcon, ShoppingBagIcon, HeartIcon, CreditCardIcon, MapPinIcon, LogOutIcon, EyeIcon, EyeOffIcon, CheckIcon, MailIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function Account() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // Demo user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890'
  };
  if (!isLoggedIn) {
    return <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Sign In
                </h1>
                <p className="text-gray-600">
                  Sign in to access your account and manage your orders
                </p>
              </div>
              <form onSubmit={e => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                    </button>
                  </div>
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Sign In
                </Button>
              </form>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
  return <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8">My Account</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <UserIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="font-bold">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <nav>
                <ul className="space-y-1">
                  <li>
                    <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center py-2 px-3 rounded-md ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <UserIcon size={18} className="mr-3" />
                      Profile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center py-2 px-3 rounded-md ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <ShoppingBagIcon size={18} className="mr-3" />
                      Orders
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('wishlist')} className={`w-full flex items-center py-2 px-3 rounded-md ${activeTab === 'wishlist' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <HeartIcon size={18} className="mr-3" />
                      Wishlist
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center py-2 px-3 rounded-md ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <MapPinIcon size={18} className="mr-3" />
                      Addresses
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('payments')} className={`w-full flex items-center py-2 px-3 rounded-md ${activeTab === 'payments' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <CreditCardIcon size={18} className="mr-3" />
                      Payment Methods
                    </button>
                  </li>
                  <li className="pt-4 mt-4 border-t border-gray-200">
                    <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center py-2 px-3 rounded-md text-red-600 hover:bg-red-50">
                      <LogOutIcon size={18} className="mr-3" />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && <div>
                  <h2 className="text-xl font-bold mb-6">
                    Personal Information
                  </h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input type="text" id="firstName" defaultValue="John" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input type="text" id="lastName" defaultValue="Doe" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input type="email" id="email" defaultValue={user.email} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input type="tel" id="phone" defaultValue={user.phone} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                    <Button type="submit" variant="primary">
                      Update Profile
                    </Button>
                  </form>
                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <h2 className="text-xl font-bold mb-6">Change Password</h2>
                    <form>
                      <div className="space-y-4 mb-6">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input type="password" id="currentPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input type="password" id="newPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input type="password" id="confirmPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                      </div>
                      <Button type="submit" variant="primary">
                        Change Password
                      </Button>
                    </form>
                  </div>
                </div>}
              {/* Orders Tab */}
              {activeTab === 'orders' && <div>
                  <h2 className="text-xl font-bold mb-6">Order History</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 text-left">
                        <tr>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order #
                          </th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">#12345</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            June 1, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Delivered
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            $249.99
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">#12344</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            May 15, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                              Shipped
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            $129.99
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="font-medium">#12343</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            April 28, 2023
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Delivered
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            $189.99
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 text-center">
                    <Link to="/products">
                      <Button variant="outline">Continue Shopping</Button>
                    </Link>
                  </div>
                </div>}
              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && <div>
                  <h2 className="text-xl font-bold mb-6">My Wishlist</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(item => <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="aspect-w-1 aspect-h-1 w-full">
                          <img src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`} alt="Product" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900">
                            Nike Air Max
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Men's Shoe
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold">$149.99</span>
                            <div className="flex space-x-2">
                              <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                <ShoppingBagIcon size={16} />
                              </button>
                              <button className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200">
                                <TrashIcon size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>}
              {/* Addresses Tab */}
              {activeTab === 'addresses' && <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">My Addresses</h2>
                    <Button variant="outline" size="sm">
                      Add New Address
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4 relative">
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                          Default
                        </span>
                      </div>
                      <h3 className="font-medium mb-1">Home</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        John Doe
                        <br />
                        123 Main Street
                        <br />
                        Apt 4B
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                        <br />
                        (123) 456-7890
                      </p>
                      <div className="flex space-x-2">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium mb-1">Work</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        John Doe
                        <br />
                        456 Business Ave
                        <br />
                        Suite 100
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                        <br />
                        (123) 555-7890
                      </p>
                      <div className="flex space-x-2">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Set as Default
                        </button>
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}
              {/* Payment Methods Tab */}
              {activeTab === 'payments' && <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Payment Methods</h2>
                    <Button variant="outline" size="sm">
                      Add New Card
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-blue-600 text-white p-2 rounded-md mr-4">
                          <CreditCardIcon size={24} />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Visa ending in 1234</h3>
                            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                              Default
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Expires 05/2025
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gray-800 text-white p-2 rounded-md mr-4">
                          <CreditCardIcon size={24} />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Mastercard ending in 5678
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Expires 12/2024
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Set as Default
                        </button>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                        <button className="text-sm text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
}