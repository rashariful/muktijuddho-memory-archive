
import React from 'react';
import InterviewCard from './InterviewCard';
import { Interview } from '@/data/interviewsData';

interface InterviewListProps {
  filteredInterviews: Interview[];
  totalInterviews: number;
}

const InterviewList = ({ filteredInterviews, totalInterviews }: InterviewListProps) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">{filteredInterviews.length}</span> of <span className="font-medium">{totalInterviews}</span> interviews
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
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewList;
