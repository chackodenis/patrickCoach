
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { NewspaperImage } from '@/data/newspaperImages';

interface NewspaperCarouselProps {
  images: NewspaperImage[];
  startIndex: number;
}

export const NewspaperCarousel: React.FC<NewspaperCarouselProps> = ({ images, startIndex }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => {
                           const isImage1 = startIndex + index + 1 === 1;
          return (
            <CarouselItem key={index}>
              <Card className="overflow-hidden shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
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
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg" />
      <CarouselNext className="right-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg" />
    </Carousel>
  );
};
