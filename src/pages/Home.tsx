import React from 'react';
import { HeroBanner } from '../components/sections/home/HeroBanner';
import { CategorySection } from '../components/sections/home/CategorySection';
import { TrendingProducts } from '../components/sections/home/TrendingProducts';
import { FeaturedProducts } from '../components/sections/home/FeaturedProducts';
import { PromotionBanner } from '../components/sections/home/PromotionBanner';
import { Testimonials } from '../components/sections/home/Testimonials';
import { Newsletter } from '../components/sections/home/Newsletter';
export function Home() {
  return <>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <PromotionBanner />
      <TrendingProducts />
      <Testimonials />
      <Newsletter />
    </>;
}