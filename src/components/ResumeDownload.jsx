
import React, { useState } from 'react';

const ResumeDownload = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDownload = () => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      alert('Resume download started!');
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/resume.pdf', '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-24 right-4 sm:right-6 z-40">
      {/* Circular Download Button */}
      <div className="relative group">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors z-10"
          title="Close"
        >
          ×
        </button>

        <button
          onClick={handleDownload}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group relative active:scale-95"
          title="Download Resume"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 transform mb-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Download Resume
            <div className="absolute top-full right-4 transform w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  );
};

export default ResumeDownload;
