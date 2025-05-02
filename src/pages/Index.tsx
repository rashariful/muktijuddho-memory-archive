
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeaturedContent from '@/components/FeaturedContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedContent />

        {/* Quote Section */}
        <section className="py-20 bg-archive-navy text-white">
          <div className="archive-container text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-archive-green/70" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/>
            </svg>
            <blockquote className="max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl mb-6 leading-relaxed">
                History is not just about documenting the past; it is about preserving the lessons that shape our future. The Liberation War Archive stands as a testament to the courage, sacrifice, and resilience of the Bangladeshi people.
              </p>
              <footer className="text-archive-green">
                <cite className="font-medium">— Dr. Anisul Hoque, Director, Liberation War Archive</cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="archive-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 border-r border-gray-200 last:border-0">
                <p className="font-serif text-4xl font-bold text-archive-green mb-2">3,500+</p>
                <p className="text-sm text-gray-600">Historical Documents</p>
              </div>
              <div className="p-6 border-r border-gray-200 last:border-0">
                <p className="font-serif text-4xl font-bold text-archive-green mb-2">780</p>
                <p className="text-sm text-gray-600">Recorded Interviews</p>
              </div>
              <div className="p-6 border-r border-gray-200 last:border-0">
                <p className="font-serif text-4xl font-bold text-archive-green mb-2">5,200+</p>
                <p className="text-sm text-gray-600">Photographs</p>
              </div>
              <div className="p-6">
                <p className="font-serif text-4xl font-bold text-archive-green mb-2">120+</p>
                <p className="text-sm text-gray-600">Research Publications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-archive-paper">
          <div className="archive-container text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Contribute to Our Archive</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Help us preserve the history of Bangladesh's Liberation War. If you have documents, photographs, or stories to share, we welcome your contribution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="archive-btn-primary">Submit Materials</a>
              <a href="/volunteer" className="archive-btn-outline">Volunteer With Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
