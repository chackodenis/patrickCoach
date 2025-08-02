
import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Tabs } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { newspaperImages } from '@/data/newspaperImages';
import { NewspaperHeader } from '@/components/newspaper/NewspaperHeader';
import { NewspaperFooter } from '@/components/newspaper/NewspaperFooter';
import { NewspaperTabs } from '@/components/newspaper/NewspaperTabs';
import { NewspaperCategory } from '@/components/newspaper/NewspaperCategory';

const NewspaperCoverage = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("all-images");
  
  // Combine all images into a single category
  const allImages = {
    id: "all-images",
    title: "All Newspaper Coverage",
    images: newspaperImages.flatMap(category => category.images)
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="newspaper-coverage-page">
        <div className="space-y-12" data-id="newspaper-coverage-content">
          <NewspaperHeader 
            title="Newspaper Coverage"
            description="Media coverage of Dr. Patrick Rajkumar's contributions to blind cricket and community service as featured in various newspapers across India in multiple languages."
          />

          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full" data-id="newspaper-coverage-tabs">
            <NewspaperCategory 
              category={allImages} 
              isMobile={isMobile} 
            />
          </Tabs>

          <NewspaperFooter 
            title="Dr. Patrick's Media Impact"
            description="These newspaper clippings from publications across India, in multiple languages including English, Hindi, Kannada, Tamil, Malayalam, and Telugu, showcase Dr. Patrick Rajkumar's significant contributions to blind cricket in India, highlighting his role in organizing and supporting the T20 World Cup for the Blind and other important initiatives."
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default NewspaperCoverage;
