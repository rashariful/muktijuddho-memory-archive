
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InterviewSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
}

const InterviewSearch = ({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter
}: InterviewSearchProps) => {
  return (
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
  );
};

export default InterviewSearch;
