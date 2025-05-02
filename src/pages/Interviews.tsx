
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample interviews data
const interviews = [
  {
    id: "int1",
    name: "Abdul Haque",
    role: "Freedom Fighter",
    location: "Dhaka",
    category: "military",
    summary: "Discusses his experiences fighting in Sector 2 and the liberation of Dhaka.",
    duration: "1:24:35",
    recordedDate: "June 12, 2010",
    thumbnailUrl: "",
  },
  {
    id: "int2",
    name: "Dr. Nusrat Hossain",
    role: "Medical Volunteer",
    location: "Chittagong",
    category: "civilian",
    summary: "Recounts providing medical aid to wounded freedom fighters and civilians during the war.",
    duration: "58:22",
    recordedDate: "August 8, 2012",
    thumbnailUrl: "",
  },
  {
    id: "int3",
    name: "Farid Ahmed",
    role: "Student Activist",
    location: "Rajshahi",
    category: "political",
    summary: "Describes organizing student protests and his involvement in the resistance movement.",
    duration: "1:12:06",
    recordedDate: "March 14, 2015",
    thumbnailUrl: "",
  },
  {
    id: "int4",
    name: "Rahima Begum",
    role: "Refugee",
    location: "Kolkata",
    category: "civilian",
    summary: "Shares her family's journey as refugees to India and their experiences in the refugee camps.",
    duration: "45:50",
    recordedDate: "December 5, 2011",
    thumbnailUrl: "",
  },
  {
    id: "int5",
    name: "Major (Retd.) Ziaur Rahman",
    role: "Military Officer",
    location: "Chittagong",
    category: "military",
    summary: "Details military strategies and operations during the critical months of the war.",
    duration: "2:05:18",
    recordedDate: "October 22, 2014",
    thumbnailUrl: "",
  },
  {
    id: "int6",
    name: "Monowara Begum",
    role: "War Victim",
    location: "Khulna",
    category: "civilian",
    summary: "Testimony of surviving violence and the impact of war on civilian populations.",
    duration: "1:03:45",
    recordedDate: "July 17, 2016",
    thumbnailUrl: "",
  },
  {
    id: "int7",
    name: "Professor Anisuzzaman",
    role: "Intellectual",
    location: "Dhaka University",
    category: "cultural",
    summary: "Discusses the cultural and intellectual resistance during the Liberation War.",
    duration: "1:37:20",
    recordedDate: "February 8, 2013",
    thumbnailUrl: "",
  },
  {
    id: "int8",
    name: "Kamal Hossain",
    role: "Diplomat",
    location: "New Delhi",
    category: "political",
    summary: "Recounts diplomatic efforts to gain international support for Bangladesh's independence.",
    duration: "1:15:55",
    recordedDate: "April 30, 2018",
    thumbnailUrl: "",
  }
];

const Interviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter interviews based on search and category
  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          interview.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || interview.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="bg-archive-navy text-white py-12">
          <div className="archive-container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Oral Histories</h1>
            <p className="text-gray-300 max-w-3xl">
              Listen to first-hand accounts from freedom fighters, survivors, activists, and witnesses who experienced 
              the Liberation War. These personal testimonies preserve the human experiences of this historic struggle.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 border-b border-gray-200">
          <div className="archive-container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-full md:w-64">
                <Input
                  type="text"
                  placeholder="Search interviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-archive-navy/20 focus:border-archive-green"
                />
              </div>
              
              <div className="w-full md:w-56">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="military">Military</SelectItem>
                    <SelectItem value="civilian">Civilian</SelectItem>
                    <SelectItem value="political">Political</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Interviews List */}
        <section className="py-12">
          <div className="archive-container">
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredInterviews.length}</span> of <span className="font-medium">{interviews.length}</span> interviews
              </p>
            </div>
            
            {filteredInterviews.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No interviews found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredInterviews.map((interview) => (
                  <Card key={interview.id} className="card-hover border border-gray-200 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Thumbnail or Avatar */}
                        <div className="bg-archive-navy/10 w-full md:w-1/3 p-6 flex items-center justify-center">
                          <div className="h-20 w-20 rounded-full bg-archive-navy flex items-center justify-center">
                            <span className="font-serif text-2xl text-white">{interview.name.charAt(0)}</span>
                          </div>
                        </div>
                        
                        {/* Interview Details */}
                        <div className="p-6 w-full md:w-2/3">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif font-medium text-lg">{interview.name}</h3>
                            <span className="inline-block px-2 py-1 text-xs bg-archive-green/10 text-archive-green rounded">
                              {interview.role}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{interview.summary}</p>
                          
                          <div className="flex flex-wrap gap-y-2 justify-between items-center text-xs text-gray-500">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {interview.duration}
                            </div>
                            <div>{interview.location}</div>
                            <div>Recorded: {interview.recordedDate}</div>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <button className="archive-btn-outline text-sm px-3 py-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Play Interview
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Featured Interview (Example of expanded view) */}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Interviews;
