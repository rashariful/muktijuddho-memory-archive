
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const featuredDocuments = [
  {
    id: "doc-1",
    title: "Declaration of Independence",
    type: "Official Document",
    date: "March 26, 1971",
    preview: "The formal proclamation of independence of Bangladesh by Sheikh Mujibur Rahman.",
    imageUrl: "",
    link: "/documents/declaration-independence"
  },
  {
    id: "doc-2",
    title: "Surrender Document",
    type: "Military Record",
    date: "December 16, 1971",
    preview: "The instrument of surrender signed by Pakistan's Lieutenant-General A. A. K. Niazi.",
    imageUrl: "",
    link: "/documents/surrender-document"
  },
  {
    id: "doc-3",
    title: "Genocide Report",
    type: "International Documentation",
    date: "August 1971",
    preview: "Report on the systematic killings during the Bangladesh Liberation War.",
    imageUrl: "",
    link: "/documents/genocide-report"
  }
];

const featuredInterviews = [
  {
    id: "int-1",
    name: "Kamal Ahmed",
    role: "Freedom Fighter",
    preview: "First-hand account of the struggle in the Chittagong Hill Tracts region.",
    imageUrl: "",
    link: "/interviews/kamal-ahmed"
  },
  {
    id: "int-2",
    name: "Dr. Nusrat Hossain",
    role: "Medical Volunteer",
    preview: "Recollections of providing medical aid to wounded freedom fighters and civilians.",
    imageUrl: "",
    link: "/interviews/nusrat-hossain"
  }
];

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="archive-container">
        <h2 className="section-title">Featured Archive Collections</h2>
        
        {/* Documents */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-serif font-semibold">Historical Documents</h3>
            <Link to="/documents" className="text-archive-green hover:text-archive-green/80 font-medium flex items-center">
              View all documents
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDocuments.map((doc) => (
              <Link to={doc.link} key={doc.id}>
                <Card className="h-full card-hover border border-gray-200">
                  <CardContent className="p-0">
                    <div className="h-40 bg-archive-paper border-b border-gray-200 flex items-center justify-center">
                      <div className="text-center p-4">
                        <span className="block font-serif text-lg font-medium text-archive-navy">{doc.title}</span>
                        <span className="text-sm text-gray-500">{doc.date}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 rounded text-xs bg-archive-green/10 text-archive-green mb-2">{doc.type}</span>
                      <p className="text-sm text-gray-600 line-clamp-3">{doc.preview}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Interviews and Photos Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interviews */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-semibold">Oral Histories</h3>
              <Link to="/interviews" className="text-archive-green hover:text-archive-green/80 font-medium flex items-center">
                All interviews
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-4">
              {featuredInterviews.map((interview) => (
                <Link to={interview.link} key={interview.id}>
                  <Card className="card-hover border border-gray-200">
                    <CardContent className="p-4 flex gap-4">
                      <div className="h-16 w-16 rounded-full bg-archive-navy/10 flex-shrink-0 flex items-center justify-center">
                        <span className="font-serif text-xl text-archive-navy">{interview.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-archive-navy">{interview.name}</h4>
                        <p className="text-sm text-archive-green mb-1">{interview.role}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{interview.preview}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Photo Gallery Preview */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-semibold">Photograph Collection</h3>
              <Link to="/gallery" className="text-archive-green hover:text-archive-green/80 font-medium flex items-center">
                Full gallery
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <Card className="border border-gray-200 overflow-hidden card-hover">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <div className="grid grid-cols-2 grid-rows-2 h-full">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="relative overflow-hidden border border-white">
                        <div className={cn(
                          "h-full bg-archive-paper flex items-center justify-center",
                          num === 4 && "relative"
                        )}>
                          <img 
                            src={`/photo-${num}.jpg`} 
                            alt={`Historical photograph ${num}`}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80';
                              target.alt = 'Placeholder image';
                            }}
                          />
                          {num === 4 && (
                            <div className="absolute inset-0 bg-archive-navy/50 flex items-center justify-center">
                              <span className="text-white font-medium">View more</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-medium">Historical Photographs</h4>
                  <p className="text-sm text-gray-600">Explore our curated collection of over 500 photographs documenting the Liberation War.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
