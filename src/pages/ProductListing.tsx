import React, { useState } from 'react';
import { FilterIcon, GridIcon, ListIcon, SlidersIcon, XIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { allProducts } from '../utils/mockData';
export function ProductListing() {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    sizes: [],
    colors: [],
    priceRange: [0, 300]
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };
  return <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex">
            <li className="hover:text-blue-600">
              <a href="/">Home</a>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-gray-600">All Products</li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Category</h3>
                <div className="space-y-2">
                  {['Men', 'Women', 'Kids', 'Sports'].map(category => <label key={category} className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 mr-2" />
                      <span>{category}</span>
                    </label>)}
                </div>
              </div>
              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Brand</h3>
                <div className="space-y-2">
                  {['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'].map(brand => <label key={brand} className="flex items-center">
                        <input type="checkbox" className="rounded text-blue-600 mr-2" />
                        <span>{brand}</span>
                      </label>)}
                </div>
              </div>
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['5', '6', '7', '8', '9', '10', '11', '12'].map(size => <label key={size} className="flex items-center">
                      <input type="checkbox" className="rounded text-blue-600 mr-2" />
                      <span>{size}</span>
                    </label>)}
                </div>
              </div>
              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[{
                  name: 'Black',
                  color: 'bg-black'
                }, {
                  name: 'White',
                  color: 'bg-white border border-gray-300'
                }, {
                  name: 'Red',
                  color: 'bg-red-600'
                }, {
                  name: 'Blue',
                  color: 'bg-blue-600'
                }, {
                  name: 'Green',
                  color: 'bg-green-600'
                }].map(colorOption => <button key={colorOption.name} className={`w-8 h-8 rounded-full ${colorOption.color}`} title={colorOption.name} aria-label={`Select ${colorOption.name} color`} />)}
                </div>
              </div>
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    ${filters.priceRange[0]}
                  </span>
                  <span className="text-sm text-gray-600">
                    ${filters.priceRange[1]}
                  </span>
                </div>
                <input type="range" min="0" max="300" value={filters.priceRange[1]} className="w-full" onChange={e => setFilters(prev => ({
                ...prev,
                priceRange: [prev.priceRange[0], parseInt(e.target.value)]
              }))} />
              </div>
              <Button variant="outline" size="sm" className="mb-2 w-full">
                Apply Filters
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                Reset Filters
              </Button>
            </div>
          </aside>
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <Button variant="outline" size="sm" onClick={toggleMobileFilter}>
              <FilterIcon size={18} className="mr-1" />
              Filters
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant={viewMode === 'grid' ? 'primary' : 'outline'} size="sm" onClick={() => setViewMode('grid')} aria-label="Grid view">
                <GridIcon size={18} />
              </Button>
              <Button variant={viewMode === 'list' ? 'primary' : 'outline'} size="sm" onClick={() => setViewMode('list')} aria-label="List view">
                <ListIcon size={18} />
              </Button>
            </div>
          </div>
          {/* Mobile Filters Sidebar */}
          {isMobileFilterOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
              <div className="bg-white h-full w-80 max-w-full p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-lg">Filters</h2>
                  <button onClick={toggleMobileFilter} className="text-gray-500 hover:text-gray-700" aria-label="Close filters">
                    <XIcon size={24} />
                  </button>
                </div>
                {/* Filter options - same as desktop */}
                {/* ... (same filter sections as desktop) ... */}
                <div className="sticky bottom-0 bg-white pt-4 border-t border-gray-200 mt-4">
                  <Button variant="primary" size="md" className="mb-2 w-full" onClick={toggleMobileFilter}>
                    Apply Filters
                  </Button>
                  <Button variant="outline" size="md" className="w-full" onClick={toggleMobileFilter}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>}
          {/* Product Grid */}
          <div className="flex-grow">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl font-bold text-gray-900">
                    All Products
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Showing {allProducts.length} results
                  </p>
                </div>
                {/* Sort and View Options - Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                  <div className="flex items-center">
                    <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                      Sort by:
                    </label>
                    <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest Arrivals</option>
                      <option value="rating">Top Rated</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant={viewMode === 'grid' ? 'primary' : 'outline'} size="sm" onClick={() => setViewMode('grid')} aria-label="Grid view">
                      <GridIcon size={18} />
                    </Button>
                    <Button variant={viewMode === 'list' ? 'primary' : 'outline'} size="sm" onClick={() => setViewMode('list')} aria-label="List view">
                      <ListIcon size={18} />
                    </Button>
                  </div>
                </div>
                {/* Sort Options - Mobile */}
                <div className="w-full sm:w-auto lg:hidden">
                  <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">
                      Sort by: Price: Low to High
                    </option>
                    <option value="price-high">
                      Sort by: Price: High to Low
                    </option>
                    <option value="newest">Sort by: Newest Arrivals</option>
                    <option value="rating">Sort by: Top Rated</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-gray-600">Active filters:</span>
              <button className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center">
                Men
                <XIcon size={14} className="ml-1" />
              </button>
              <button className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center">
                Size: 10
                <XIcon size={14} className="ml-1" />
              </button>
              <button className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full flex items-center">
                Under $150
                <XIcon size={14} className="ml-1" />
              </button>
              <button className="text-sm text-blue-600 hover:underline ml-2">
                Clear all
              </button>
            </div>
            {/* Products Grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'space-y-4'}>
              {allProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  &laquo;
                </a>
                <a href="#" aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  8
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  &raquo;
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>;
}