import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ShoppingCartIcon, HeartIcon } from 'lucide-react';
import { Product } from '../../utils/types';
type ProductCardProps = {
  product: Product;
  className?: string;
};
export function ProductCard({
  product,
  className = ''
}: ProductCardProps) {
  const {
    id,
    name,
    brand,
    price,
    originalPrice,
    discountPercentage,
    rating,
    reviewCount,
    images,
    isNew
  } = product;
  return <div className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {/* Product badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
        {isNew && <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>}
        {discountPercentage && <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>}
      </div>
      {/* Quick actions */}
      <div className="absolute top-2 right-2 z-10">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors" aria-label="Add to wishlist">
          <HeartIcon size={18} className="text-gray-600" />
        </button>
      </div>
      {/* Product image */}
      <Link to={`/products/${id}`} className="block relative pb-[100%] overflow-hidden">
        <img src={images[0]} alt={name} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
      </Link>
      {/* Product info */}
      <div className="p-4">
        <div className="mb-1">
          <span className="text-sm text-gray-500 font-medium">{brand}</span>
        </div>
        <Link to={`/products/${id}`} className="block">
          <h3 className="text-base font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </Link>
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < Math.floor(rating) ? 'currentColor' : 'none'} />)}
          </div>
          <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>}
          </div>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Add to cart">
            <ShoppingCartIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
}