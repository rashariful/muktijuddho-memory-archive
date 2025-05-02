
import React from 'react';

const InterviewsHeader = () => {
  return (

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
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Oral Histories</h1>
        <p className="text-gray-300 max-w-3xl">
          Listen to first-hand accounts from freedom fighters, survivors, activists, and witnesses who experienced 
          the Liberation War. These personal testimonies preserve the human experiences of this historic struggle.
        </p>
          </div>
        </section>
   
  );
};

export default InterviewsHeader;
