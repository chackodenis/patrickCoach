
import React from 'react';

interface NewspaperHeaderProps {
  title: string;
  description: string;
}

export const NewspaperHeader: React.FC<NewspaperHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 mb-6">
        {title}
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8"></div>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};
