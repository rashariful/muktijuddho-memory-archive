
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedInterview = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="font-serif text-2xl font-bold mb-6">Featured Interview</h2>
      
      <Card className="border border-gray-200 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-archive-navy p-4">
            <div className="archive-container">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center">
                    <span className="font-serif text-4xl text-archive-navy">KH</span>
                  </div>
                </div>
                <div className="md:w-3/4 text-white text-center md:text-left">
                  <h3 className="font-serif text-2xl font-bold mb-2">Kamal Hossain</h3>
                  <p className="text-gray-300 mb-2">Diplomat | Recorded April 30, 2018</p>
                  <p className="text-sm text-gray-300 mb-4">
                    "The diplomatic efforts were critical in gaining international recognition for our cause. 
                    It was a battle not just on the ground, but in the halls of global diplomacy."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-6">
              <div className="w-full h-64 bg-archive-navy/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-archive-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <h4 className="font-serif text-xl font-medium mb-4">Interview Summary</h4>
            <p className="text-gray-700 mb-4">
              In this in-depth interview, Dr. Kamal Hossain discusses his role in the diplomatic efforts during the Liberation War. 
              As a key figure in the provisional government, he traveled to numerous countries seeking international support and recognition 
              for Bangladesh's independence. He details meetings with world leaders, the challenges faced in communicating the plight of Bangladeshis, 
              and the strategic approach to international diplomacy during wartime.
            </p>
            <p className="text-gray-700 mb-6">
              The interview provides valuable insights into the international dimension of the Liberation War and the parallel diplomatic 
              struggle that was crucial for Bangladesh's eventual recognition as a sovereign nation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="archive-btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Full Interview
              </button>
              <button className="archive-btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                View Transcript
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedInterview;
