export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
  tags: string[];
}
export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}
export interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}
export interface CustomerTestimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  image?: string;
  location?: string;
  date: string;
}