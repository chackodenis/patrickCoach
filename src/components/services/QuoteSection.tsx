
import React from 'react';

export const QuoteSection = () => (
  <div className="mb-16 mt-12">
    
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
      <svg 
        className="w-10 h-10 text-blue-300 mx-auto mb-4" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed">
        "We make a living by what we get, but we make a life by what we give."
      </blockquote>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto my-6"></div>
      <cite className="block mt-6 text-gray-600 font-semibold">– Winston Churchill</cite>
    </div>
  </div>
);
