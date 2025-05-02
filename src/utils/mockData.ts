import { Product, Category, CustomerTestimonial } from './types';
export const featuredProducts: Product[] = [{
  id: '1',
  name: 'Air Max Pulse',
  brand: 'Nike',
  category: 'Men',
  price: 149.99,
  rating: 4.8,
  reviewCount: 124,
  images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'],
  colors: ['Black', 'White', 'Red'],
  sizes: ['7', '8', '9', '10', '11', '12'],
  description: 'The Nike Air Max Pulse brings a underground techno-inspired look to the iconic Air Max line. Its rugged outsole and textile-wrapped midsole deliver a bold, ready-for-the-streets look while Max Air cushioning adds comfort to your day.',
  features: ['Mesh and synthetic upper for breathability', 'Visible Air cushioning in the heel', 'Rubber outsole for durability and traction', 'Padded collar for comfort'],
  isNew: true,
  isFeatured: true,
  inStock: true,
  tags: ['Running', 'Casual', 'Lifestyle']
}, {
  id: '2',
  name: 'Ultra Boost 5.0',
  brand: 'Adidas',
  category: 'Men',
  price: 189.99,
  originalPrice: 219.99,
  discountPercentage: 14,
  rating: 4.7,
  reviewCount: 98,
  images: ['https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80', 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80', 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80'],
  colors: ['Black', 'White', 'Blue', 'Grey'],
  sizes: ['7', '8', '9', '10', '11', '12', '13'],
  description: 'Experience epic energy with the latest Ultra Boost. The responsive Boost midsole delivers incredible energy return while the Continental™ Rubber outsole provides extraordinary grip in wet and dry conditions.',
  features: ['Primeknit+ textile upper', 'Boost midsole for responsive cushioning', 'Continental™ Rubber outsole', 'Weight: 10.9 oz'],
  isFeatured: true,
  inStock: true,
  tags: ['Running', 'Performance', 'Cushioning']
}, {
  id: '3',
  name: 'Classic Leather',
  brand: 'Reebok',
  category: 'Women',
  price: 79.99,
  originalPrice: 89.99,
  discountPercentage: 11,
  rating: 4.5,
  reviewCount: 76,
  images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'],
  colors: ['White', 'Black', 'Chalk'],
  sizes: ['5', '6', '7', '8', '9', '10'],
  description: 'Originally designed for performance running, the Classic Leather has become a staple in street style. These shoes stay true to the original design, with a soft leather upper and die-cut EVA midsole for lightweight cushioning.',
  features: ['Soft leather upper for support and comfort', 'Low-cut design for mobility', 'EVA midsole for lightweight cushioning', 'Heritage style'],
  isFeatured: true,
  inStock: true,
  tags: ['Classic', 'Casual', 'Lifestyle']
}, {
  id: '4',
  name: 'Gel-Kayano 29',
  brand: 'ASICS',
  category: 'Women',
  price: 159.99,
  rating: 4.9,
  reviewCount: 112,
  images: ['https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'],
  colors: ['Blue', 'Black', 'Pink', 'Purple'],
  sizes: ['5', '6', '7', '8', '9', '10'],
  description: 'The GEL-KAYANO® 29 shoe creates a stable running experience through the FF BLAST™ PLUS cushioning and the LITETRUSS™ technology positioned in the midsole. This helps create a more balanced stride from footstrike to toe-off.',
  features: ['FF BLAST™ PLUS cushioning provides lightweight impact absorption', 'Rearfoot and Forefoot GEL® Technology cushioning', 'LITETRUSS™ stability technology', 'Engineered knit upper improves breathability'],
  isNew: true,
  isFeatured: true,
  inStock: true,
  tags: ['Running', 'Stability', 'Performance']
}];
export const newArrivals: Product[] = [{
  id: '5',
  name: 'Chuck 70 High Top',
  brand: 'Converse',
  category: 'Unisex',
  price: 85.00,
  rating: 4.6,
  reviewCount: 58,
  images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80', 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80', 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80'],
  colors: ['Black', 'White', 'Red', 'Navy'],
  sizes: ['5', '6', '7', '8', '9', '10', '11', '12'],
  description: 'The Chuck 70 is our premium throwback sneaker that uses modern design to celebrate the original 1970s Chuck Taylor All Star. Details like higher rubber foxing, a cushioned footbed, and premium canvas make it an elevated icon.',
  features: ['Premium canvas upper for durability', 'Higher rubber foxing for added durability', 'OrthoLite insole for cushioning', 'Heritage details like stitching on the sidewall'],
  isNew: true,
  inStock: true,
  tags: ['Casual', 'Classic', 'Lifestyle']
}, {
  id: '6',
  name: 'Mountain Boots',
  brand: 'Timberland',
  category: 'Men',
  price: 199.99,
  rating: 4.7,
  reviewCount: 42,
  images: ['https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'],
  colors: ['Wheat', 'Brown', 'Black'],
  sizes: ['7', '8', '9', '10', '11', '12', '13'],
  description: 'Our iconic waterproof boot is made to tackle any terrain. Premium full-grain waterproof leather with sealed seams keeps feet dry in any weather, while anti-fatigue technology provides all-day comfort.',
  features: ['Premium full-grain waterproof leather', 'Rustproof hardware for durability', 'Anti-fatigue technology for comfort', 'Rubber lug outsole for traction'],
  isNew: true,
  inStock: true,
  tags: ['Boots', 'Outdoor', 'Waterproof']
}, {
  id: '7',
  name: 'Slip-On Sandals',
  brand: 'Birkenstock',
  category: 'Women',
  price: 99.99,
  rating: 4.5,
  reviewCount: 84,
  images: ['https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'],
  colors: ['Mocha', 'Black', 'Stone', 'White'],
  sizes: ['5', '6', '7', '8', '9', '10'],
  description: 'The classic design features an anatomically shaped cork-latex footbed that molds to your foot for exceptional support. The soft suede lining and adjustable straps ensure a comfortable fit.',
  features: ['Cork-latex footbed molds to the shape of your foot', 'Suede lined for comfort', 'EVA sole for lightweight cushioning', 'Adjustable straps for a custom fit'],
  isNew: true,
  inStock: true,
  tags: ['Sandals', 'Comfort', 'Summer']
}, {
  id: '8',
  name: 'Cloudflow',
  brand: 'On',
  category: 'Men',
  price: 139.99,
  rating: 4.8,
  reviewCount: 36,
  images: ['https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'],
  colors: ['Blue/Navy', 'Black/White', 'Red/Flash'],
  sizes: ['7', '8', '9', '10', '11', '12'],
  description: 'The Cloudflow is engineered for high-performance running. The responsive CloudTec® sole has 18 Cloud elements that deliver a smooth ride with explosive take-offs. The ultralight, knit-weave upper keeps weight to a minimum.',
  features: ['Helion™ superfoam provides cushioning', '18 Cloud elements for responsive cushioning', 'Engineered mesh upper for ventilation', 'Weight: 8.29 oz'],
  isNew: true,
  inStock: true,
  tags: ['Running', 'Performance', 'Lightweight']
}];
export const allProducts: Product[] = [...featuredProducts, ...newArrivals];
export const categories: Category[] = [{
  id: '1',
  name: 'Men',
  image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  productCount: 124
}, {
  id: '2',
  name: 'Women',
  image: 'https://images.unsplash.com/photo-1622760807800-66cf1466fc08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  productCount: 156
}, {
  id: '3',
  name: 'Kids',
  image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  productCount: 89
}, {
  id: '4',
  name: 'Sports',
  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  productCount: 112
}];
export const testimonials: CustomerTestimonial[] = [{
  id: "1",
  name: "Sarah Johnson",
  comment: "The most comfortable running shoes I have ever owned! Fast shipping and excellent customer service.",
  rating: 5,
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  location: "New York, NY",
  date: "2023-06-15"
}, {
  id: "2",
  name: "Michael Rodriguez",
  comment: "Great selection of hiking boots. Found exactly what I needed for my trip to Yosemite. Will definitely shop here again!",
  rating: 4,
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  location: "Denver, CO",
  date: "2023-05-22"
}, {
  id: "3",
  name: "Emily Chen",
  comment: "The size guide was spot on! My new sneakers fit perfectly. Love the free shipping option too.",
  rating: 5,
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
  location: "Seattle, WA",
  date: "2023-07-03"
}];