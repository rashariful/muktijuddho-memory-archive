
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InterviewsHeader from '@/components/interviews/InterviewsHeader';
import InterviewSearch from '@/components/interviews/InterviewSearch';
import InterviewList from '@/components/interviews/InterviewList';
import FeaturedInterview from '@/components/interviews/FeaturedInterview';
import { interviews } from '@/data/interviewsData';

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
        <InterviewsHeader />
        <InterviewSearch 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        {/* Interviews List */}
        <section className="py-12">
          <div className="archive-container">
            <InterviewList 
              filteredInterviews={filteredInterviews}
              totalInterviews={interviews.length}
            />
            <FeaturedInterview />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Interviews;
