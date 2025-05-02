import mainbannerimg from '../../../assets/shoe-banner.jpg';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../../ui/Button';
import { useEffect, useRef } from 'react';

export function HeroBanner() {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This will trigger the animations after the component mounts
    if (textRef.current) {
      textRef.current.style.opacity = '1';
      textRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section className="relative overflow-hidden text-white bg-gray-900">
      {/* Animated Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={mainbannerimg} 
          alt="Stylish shoes" 
          className="object-cover w-full h-full opacity-40 animate-zoomFade" 
          style={{
            animation: 'zoomFade 20s ease-in-out infinite alternate'
          }}
        />
      </div>
      
      {/* Animated Text Content */}
      <div 
        ref={textRef}
        className="container relative z-10 px-4 py-24 mx-auto transition-all duration-1000 ease-out md:py-32 lg:py-40"
        style={{
          opacity: 0,
          transform: 'translateY(20px)'
        }}
      >
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-white delay-100 bg-blue-600 rounded-full animate-fadeIn">
            New Collection
          </span>
          <h1 className="mb-4 text-4xl font-bold delay-200 md:text-5xl lg:text-6xl animate-fadeIn">
            Step Into <span className="text-blue-400">Style</span> This Season
          </h1>
          <p className="max-w-xl mb-8 text-lg text-gray-300 delay-300 md:text-xl animate-fadeIn">
            Discover our latest collection of premium footwear designed for
            comfort, performance, and style.
          </p>
          <div className="flex flex-wrap gap-4 delay-500 animate-fadeIn">
            <Button variant="primary" size="lg">
              Shop Now
              <ArrowRightIcon size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:bg-opacity-10">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>

      {/* CSS for animations - you can also put this in your global CSS */}
      <style>{`
        @keyframes zoomFade {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        .animate-zoomFade {
          animation: zoomFade 20s ease-in-out infinite alternate;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}