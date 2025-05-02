import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample document data
const documents = [
  {
    id: "doc1",
    title: "Declaration of Independence",
    date: "March 26, 1971",
    type: "Official Document",
    category: "political",
    description:
      "The formal proclamation of Bangladesh's independence by Sheikh Mujibur Rahman.",
    source: "Bangladesh National Archives",
    imageUrl:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/10/full/1715363879-3765.jpg?im=FeatureCrop,size=(826,465)",
  },
  {
    id: "doc2",
    title: "Instrument of Surrender",
    date: "December 16, 1971",
    type: "Military Document",
    category: "military",
    description:
      "Document signed by Pakistan's Eastern Command, marking the end of the war.",
    source: "Ministry of Liberation War Affairs",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/579ab4b16a49638f9c84f685/1471299971864-4LM2TJ0PRSREEP85JIJC/Depositphotos_13346986_original.jpg?format=1500w",
  },
  {
    id: "doc3",
    title: "Genocide Report by International Commission",
    date: "August 1971",
    type: "Report",
    category: "humanitarian",
    description:
      "Documentation of atrocities committed during the Bangladesh Liberation War.",
    source: "International Commission of Jurists",
    imageUrl:
      "https://th-i.thgim.com/public/incoming/f8a0zj/article65377930.ece/alternates/FREE_1200/2022-05-02T094042Z_1612909435_RC2VYT9HATHZ_RTRMADP_3_SOUTHASIA-WEATHER-HEATWAVE.JPG",
  },
  {
    id: "doc4",
    title: "United Nations Resolution on Refugees",
    date: "July 1971",
    type: "International Document",
    category: "humanitarian",
    description:
      "UN resolution addressing the refugee crisis during the conflict.",
    source: "United Nations Archives",
    imageUrl:
      "https://www.shutterstock.com/image-photo/indian-labour-carries-pile-bricks-260nw-2104381133.jpg",
  },
  {
    id: "doc5",
    title: "Radio Broadcast Transcripts",
    date: "March-December 1971",
    type: "Media",
    category: "communication",
    description:
      "Transcripts of wartime broadcasts from 'Swadhin Bangla Betar Kendra'.",
    source: "Bangladesh Betar Archive",
    imageUrl:
      "https://www.shutterstock.com/image-photo/march-24-2013-girl-carries-260nw-1872148339.jpg",
  },
  {
    id: "doc6",
    title: "Eyewitness Accounts Compilation",
    date: "1972",
    type: "Testimonials",
    category: "personal",
    description:
      "Collected testimonies from witnesses of key events during the war.",
    source: "Liberation War Museum",
    imageUrl:
      "https://www.humanium.org/en/wp-content/uploads/2017/07/shutterstock_180534953-830x1245.jpg",
  },
  {
    id: "doc7",
    title: "International Aid Documentation",
    date: "1971-1972",
    type: "Reports",
    category: "humanitarian",
    description:
      "Records of international humanitarian assistance during the conflict.",
    source: "Ministry of Foreign Affairs",
    imageUrl:
      "https://blog.ipleaders.in/wp-content/uploads/2018/02/BV-Acharya-13.jpg",
  },
  {
    id: "doc8",
    title: "Military Operation Maps",
    date: "1971",
    type: "Military Document",
    category: "military",
    description:
      "Strategic maps used during various operations of the Liberation War.",
    source: "Bangladesh Military Archives",
    imageUrl:
      "https://cdn.daily-sun.com/public/news_images/2021/10/17/Workers-ds-1.jpg",
  },
  {
    id: "doc9",
    title: "Provisional Government Formation Documents",
    date: "April 1971",
    type: "Official Document",
    category: "political",
    description:
      "Documents related to the formation of the provisional government.",
    source: "National Archives",
    imageUrl:
      "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1581050621.jpg",
  },
];

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter documents based on search term and active category
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="relative text-white py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://static.trip101.com/paragraph_media/pictures/002/640/034/large/800px-_E0_A6_AA_E0_A6_BE_E0_A6_B9_E0_A6_BE_E0_A6_A1_E0_A6_BC_E0_A6_AA_E0_A7_81_E0_A6_B0__E0_A6_AC_E0_A7_8C_E0_A6_A6_E0_A7_8D_E0_A6_A7__E0_A6_AC_E0_A6_BF_E0_A6_B9_E0_A6_BE_E0_A6_B0_22.jpg?1659002556"
              alt="Historical background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-archive-navy/80" />
          </div>

          {/* Content */}
          <div className="archive-container relative z-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Historical Documents
            </h1>
            <p className="text-gray-200 max-w-3xl">
              Explore original documents, reports, and records that chronicle
              the Bangladesh Liberation War. These primary sources provide
              critical insights into the political, military, and social aspects
              of the conflict.
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

              <Tabs
                defaultValue="all"
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full md:w-auto"
              >
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
                Showing{" "}
                <span className="font-medium">{filteredDocuments.length}</span>{" "}
                of <span className="font-medium">{documents.length}</span>{" "}
                documents
              </p>
            </div>

            {filteredDocuments.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No documents found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <Card
                    key={doc.id}
                    className="card-hover border border-gray-200"
                  >
                    {/* <CardContent className="p-0">
                      <div className="p-2 bg-archive-paper border-b border-gray-200 flex justify-between items-center">
                        <span className="inline-block px-2 py-1 text-xs bg-archive-green/10 text-archive-green rounded">
                          {doc.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {doc.date}
                        </span>
                      </div>
                      <div className="p-4">
                        <div>
                          <img src={doc.imageUrl} alt="" />
                        </div>
                        <h3 className="font-serif font-medium text-lg mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {doc.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            <span className="font-medium">Source:</span>{" "}
                            {doc.source}
                          </span>
                          <button className="archive-btn bg-white text-archive-green border border-archive-green hover:bg-archive-green/10 px-3 py-1 text-sm">
                            View Document
                          </button>
                        </div>
                      </div>
                    </CardContent> */}
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Header */}
                      <div className="p-2 bg-archive-paper border-b border-gray-200 flex justify-between items-center">
                        <span className="inline-block px-2 py-1 text-xs bg-archive-green/10 text-archive-green rounded">
                          {doc.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {doc.date}
                        </span>
                      </div>

                      {/* Main Content */}
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="mb-3">
                          <img
                            src={doc.imageUrl}
                            alt={doc.title}
                            className="w-full h-40 object-cover rounded"
                          />
                        </div>

                        <h3 className="font-serif font-medium text-lg mb-2">
                          {doc.title}
                        </h3>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {doc.description}
                        </p>

                        {/* Footer aligned to bottom */}
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-xs text-gray-500 truncate max-w-[60%]">
                            <span className="font-medium">Source:</span>{" "}
                            <span className="inline-block max-w-full truncate align-middle">
                              {doc.source}
                            </span>
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
