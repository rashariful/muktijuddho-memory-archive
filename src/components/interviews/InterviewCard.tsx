
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Interview } from '@/data/interviewsData';

interface InterviewCardProps {
  interview: Interview;
}

const InterviewCard = ({ interview }: InterviewCardProps) => {
  return (
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
  );
};

export default InterviewCard;
