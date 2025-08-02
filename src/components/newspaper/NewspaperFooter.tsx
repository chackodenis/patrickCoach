
import React from 'react';

interface NewspaperFooterProps {
  title: string;
  description: string;
}

export const NewspaperFooter: React.FC<NewspaperFooterProps> = ({ title, description }) => {
  return (
    <div className="text-center bg-black p-6 rounded-lg border border-gray-800 mt-8">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};
