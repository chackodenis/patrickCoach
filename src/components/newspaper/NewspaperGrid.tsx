
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { NewspaperImage } from '@/data/newspaperImages';

interface NewspaperGridProps {
  images: NewspaperImage[];
  startIndex: number;
}

export const NewspaperGrid: React.FC<NewspaperGridProps> = ({ images, startIndex }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {images.map((image, index) => {
                       const isImage1 = startIndex + index + 1 === 1;
        return (
          <Card key={index} className="overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-contain"
                                          style={{ 
                          minHeight: isImage1 ? "200px" : "300px", 
                          maxHeight: isImage1 ? "400px" : "600px",
                          aspectRatio: isImage1 ? "16/9" : "auto",
                          transform: isImage1 ? "rotate(-90deg)" : "none"
                        }}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Image {startIndex + index + 1}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
