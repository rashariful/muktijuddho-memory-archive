
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-archive-paper py-16 md:py-24">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-archive-navy" />
        <div className="absolute left-0 bottom-0 top-0 w-px bg-archive-navy" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute left-0 right-0 h-px bg-archive-navy" style={{ top: `${(i + 1) * 5}%` }} />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px bg-archive-navy" style={{ left: `${(i + 1) * 5}%` }} />
        ))}
      </div>

      <div className="archive-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium tracking-wider uppercase bg-archive-green/10 text-archive-green rounded-full">National Heritage</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Preserving the Legacy of Bangladesh's 
              <span className="text-archive-green block mt-2">Liberation War</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              An extensive digital archive dedicated to documenting the historical journey of Bangladesh's struggle for independence in 1971. Explore documents, testimonies, and photographs that tell the story of a nation's birth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/documents" className="archive-btn-primary">
                Explore Archive
              </Link>
              <Link to="/contact" className="archive-btn-outline">
                Contribute Materials
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <div className="relative h-0 pb-[60%]">
              <div className="absolute inset-0 bg-archive-navy flex items-center justify-center overflow-hidden">
                <img 
                  src="/liberation-war-hero.jpg" 
                  alt="Historical photograph from the Bangladesh Liberation War"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    // Fallback image if the main image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80';
                    target.alt = 'Symbolic image representing historical archives';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="font-serif text-lg">Discover the untold stories</p>
                  <p className="text-sm opacity-80">Over 1,000 historical records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
