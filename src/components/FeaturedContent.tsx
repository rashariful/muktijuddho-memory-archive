
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const featuredDocuments = [
  {
    id: "doc-1",
    title: "Declaration of Independence",
    type: "Official Document",
    date: "March 26, 1971",
    preview: "The formal proclamation of independence of Bangladesh by Sheikh Mujibur Rahman.",
    imageUrl: "https://images.theconversation.com/files/606611/original/file-20240712-17-j3tnek.jpg?ixlib=rb-4.1.0&rect=17%2C22%2C3817%2C2121&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    link: "/documents/declaration-independence"
  },
  {
    id: "doc-2",
    title: "7th March Speech",
    type: "Historical Speech",
    date: "March 7, 1971",
    preview: "Sheikh Mujibur Rahman's historic speech that effectively declared the independence of Bangladesh.",
    imageUrl: "https://t3.ftcdn.net/jpg/02/65/46/60/360_F_265466046_pADSmTrhaB5uU3yXdmuYQL1fR8JPkKnQ.jpg",
    link: "/documents/seventh-march-speech"
  },
  {
    id: "doc-3",
    title: "Mujibnagar Government Formation",
    type: "Political Document",
    date: "April 10, 1971",
    preview: "Documents detailing the formation of the first government of Bangladesh.",
    imageUrl: "https://www.humanium.org/en/wp-content/uploads/2021/11/shutterstock_1528702352-1024x684.jpg",
    link: "/documents/mujibnagar-government"
  }
];

const featuredInterviews = [
  {
    id: "int-1",
    name: "Kamal Ahmed",
    role: "Freedom Fighter",
    preview: "First-hand account of the liberation struggle in Chittagong sector.",
    imageUrl: "https://cdn.daily-sun.com/public/news_images/2024/12/22/thumbnails/1734880791-b731cd55f4785ede1faa7a2a589a490a.jpg",
    link: "/interviews/kamal-ahmed"
  },
  {
    id: "int-2",
    name: "Dr. Nusrat Hossain",
    role: "Medical Volunteer",
    preview: "Recollections of providing medical aid to wounded freedom fighters in the border regions.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4gYEZWLIj7QYKf_b4US_bkRk08I5vRRMpQ&s",
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
                    <AspectRatio ratio={16/9} className="bg-archive-navy/5 border-b border-gray-200">
                      <img 
                        src={doc.imageUrl} 
                        alt={doc.title}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 rounded text-xs bg-archive-green/10 text-archive-green mb-2">{doc.type}</span>
                      <h4 className="font-medium font-serif text-lg mb-1 text-archive-navy">{doc.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">{doc.date}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{doc.preview}</p>
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
                      <div className="h-16 w-16 rounded-full bg-archive-navy overflow-hidden flex-shrink-0">
                        <img 
                          src={interview.imageUrl}
                          alt={interview.name}
                          className="w-full h-full object-cover"
                        />
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
                <div className="grid grid-cols-2 grid-rows-2 aspect-[4/3]">
                  {[
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_2bBNCvg95HshQmMRUG0r_ckorLb7mrWh-aebe5BI0X15JNE4C9NsUUX-SZq753FXMc&usqp=CAU",
                    "https://www.humanium.org/en/wp-content/uploads/2021/11/shutterstock_1528702352-1024x684.jpg",
                    "https://www.indiaspend.com/h-upload/2023/09/29/1079481-updated-bonded-labour-india-1500.webp",
                    "https://images.theconversation.com/files/606611/original/file-20240712-17-j3tnek.jpg?ixlib=rb-4.1.0&rect=17%2C22%2C3817%2C2121&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                  ].map((imgUrl, index) => (
                    <div key={index} className={cn(
                      "relative overflow-hidden border border-white",
                      index === 3 && "relative"
                    )}>
                      <img 
                        src={imgUrl}
                        alt={`Historical photograph ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      {index === 3 && (
                        <div className="absolute inset-0 bg-archive-navy/50 flex items-center justify-center">
                          <span className="text-white font-medium">View more</span>
                        </div>
                      )}
                    </div>
                  ))}
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
