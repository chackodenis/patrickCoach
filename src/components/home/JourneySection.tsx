
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const JourneySection = () => {
  const achievementImages = [
    {
      src: "/lovable-uploads/d56246c9-a80a-41de-b45d-19cf6a67cc4c.png",
      description: "Meeting the Prime Minister Narendra Modi"
    },
    {
      src: "/lovable-uploads/de25e107-8118-4b9f-b19a-85867d4d9173.png",
      description: "TEDx talk at KIIT University - 'Energy Never Dies' sharing insights on cricket development"
    },
    {
      src: "/lovable-uploads/9a83aa04-d025-4a7d-b6c4-43921918b47c.png",
      description: "93.5 FM Radio award for most influential 100 People"
    },
    {
      src: "/lovable-uploads/0ab9652a-07c9-41b8-9542-5a178a005ddd.png",
      description: "REX Karamveer Award"
    },
    {
      src: "/lovable-uploads/5e0e586c-e525-4276-92a0-ecaf1ad61875.png",
      description: "Dronacharya Award"
    },
    {
      src: "/lovable-uploads/6e0c6d93-ab0f-46af-97e0-3fcac818b21e.png",
      description: "Best Teacher of the year 2018"
    }
  ];

  return (
    <div className="bg-gray-50 py-20" data-id="journey-section">
      <div className="container mx-auto px-4" data-id="journey-container">
        <div className="text-center mb-16" data-id="journey-header">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" tabIndex={0} data-id="journey-title">Journey Highlights</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6" data-id="journey-divider"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg" data-id="journey-description">A glimpse into the remarkable moments that have shaped my career as a coach and mentor.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="journey-grid">
          {achievementImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-lg h-[300px] relative" data-id={`journey-item-${index}`}>
              <img
                src={image.src}
                alt={image.description}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-id={`journey-image-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" data-id={`journey-overlay-${index}`}>
                <div className="absolute bottom-0 left-0 right-0 p-6" data-id={`journey-content-${index}`}>
                  <p className="text-white font-medium text-lg" tabIndex={0} data-id={`journey-text-${index}`}>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center" data-id="journey-cta">
          <Link to="/gallery" data-id="journey-gallery-link">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-lg group" data-id="journey-gallery-button">
              <span data-id="journey-gallery-text">View Full Gallery</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" data-id="journey-gallery-arrow" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
