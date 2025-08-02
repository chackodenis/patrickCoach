
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewspaperCategory } from '@/data/newspaperImages';

interface NewspaperTabsProps {
  categories: NewspaperCategory[];
  activeTab: string;
}

export const NewspaperTabs: React.FC<NewspaperTabsProps> = ({ categories, activeTab }) => {
  return (
    <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
      {categories.map((category) => (
        <TabsTrigger 
          key={category.id} 
          value={category.id}
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          {category.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
