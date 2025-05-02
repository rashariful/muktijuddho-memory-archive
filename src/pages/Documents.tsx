
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample document data
const documents = [
  {
    id: "doc1",
    title: "Declaration of Independence",
    date: "March 26, 1971",
    type: "Official Document",
    category: "political",
    description: "The formal proclamation of Bangladesh's independence by Sheikh Mujibur Rahman.",
    source: "Bangladesh National Archives",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80"
  },
  {
    id: "doc2",
    title: "Instrument of Surrender",
    date: "December 16, 1971",
    type: "Military Document",
    category: "military",
    description: "Document signed by Pakistan's Eastern Command, marking the end of the war.",
    source: "Ministry of Liberation War Affairs",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80"
  },
  {
    id: "doc3",
    title: "Genocide Report by International Commission",
    date: "August 1971",
    type: "Report",
    category: "humanitarian",
    description: "Documentation of atrocities committed during the Bangladesh Liberation War.",
    source: "International Commission of Jurists",
    imageUrl: "https://images.unsplash.com/photo-1605013343009-c16ee71f2a66?auto=format&fit=crop&q=80"
  },
  {
    id: "doc4",
    title: "United Nations Resolution on Refugees",
    date: "July 1971",
    type: "International Document",
    category: "humanitarian",
    description: "UN resolution addressing the refugee crisis during the conflict.",
    source: "United Nations Archives",
    imageUrl: "https://images.unsplash.com/photo-1580820267682-426da823b514?auto=format&fit=crop&q=80"
  },
  {
    id: "doc5",
    title: "Radio Broadcast Transcripts",
    date: "March-December 1971",
    type: "Media",
    category: "communication",
    description: "Transcripts of wartime broadcasts from 'Swadhin Bangla Betar Kendra'.",
    source: "Bangladesh Betar Archive",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-b53601a7a6c9?auto=format&fit=crop&q=80"
  },
  {
    id: "doc6",
    title: "Eyewitness Accounts Compilation",
    date: "1972",
    type: "Testimonials",
    category: "personal",
    description: "Collected testimonies from witnesses of key events during the war.",
    source: "Liberation War Museum",
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80"
  },
  {
    id: "doc7",
    title: "International Aid Documentation",
    date: "1971-1972",
    type: "Reports",
    category: "humanitarian",
    description: "Records of international humanitarian assistance during the conflict.",
    source: "Ministry of Foreign Affairs",
    imageUrl: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80"
  },
  {
    id: "doc8",
    title: "Military Operation Maps",
    date: "1971",
    type: "Military Document",
    category: "military",
    description: "Strategic maps used during various operations of the Liberation War.",
    source: "Bangladesh Military Archives",
    imageUrl: "https://images.unsplash.com/photo-1541959833400-049d37f98cfc?auto=format&fit=crop&q=80"
  },
  {
    id: "doc9",
    title: "Provisional Government Formation Documents",
    date: "April 1971",
    type: "Official Document",
    category: "political",
    description: "Documents related to the formation of the provisional government.",
    source: "National Archives",
    imageUrl: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80"
  }
];

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter documents based on search term and active category
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="bg-archive-navy text-white py-12">
          <div className="archive-container">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Historical Documents</h1>
            <p className="text-gray-300 max-w-3xl">
              Explore original documents, reports, and records that chronicle the Bangladesh Liberation War. 
              These primary sources provide critical insights into the political, military, and social aspects of the conflict.
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
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-archive-navy/20 focus:border-archive-green"
                />
              </div>
              
              <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
                <TabsList className="bg-archive-paper w-full md:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="political">Political</TabsTrigger>
                  <TabsTrigger value="military">Military</TabsTrigger>
                  <TabsTrigger value="humanitarian">Humanitarian</TabsTrigger>
                  <TabsTrigger value="communication">Communication</TabsTrigger>
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-12">
          <div className="archive-container">
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredDocuments.length}</span> of <span className="font-medium">{documents.length}</span> documents
              </p>
            </div>
            
            {filteredDocuments.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No documents found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <Card key={doc.id} className="card-hover border border-gray-200">
                    <CardContent className="p-0">
                      <div className="p-2 bg-archive-paper border-b border-gray-200 flex justify-between items-center">
                        <span className="inline-block px-2 py-1 text-xs bg-archive-green/10 text-archive-green rounded">
                          {doc.type}
                        </span>
                        <span className="text-xs text-gray-500">{doc.date}</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif font-medium text-lg mb-2">{doc.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            <span className="font-medium">Source:</span> {doc.source}
                          </span>
                          <button className="archive-btn bg-white text-archive-green border border-archive-green hover:bg-archive-green/10 px-3 py-1 text-sm">
                            View Document
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;
