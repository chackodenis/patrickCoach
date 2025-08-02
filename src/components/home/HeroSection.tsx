
import React from 'react';
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white" data-id="hero-section">
      {/* Background image with adjusted opacity and positioning for mobile */}
      <div 
        className={`absolute inset-0 bg-[url('/lovable-uploads/d56246c9-a80a-41de-b45d-19cf6a67cc4c.png')] bg-cover ${isMobile ? 'bg-top opacity-20' : 'bg-center opacity-10'}`}
        style={{
          backgroundSize: isMobile ? '150% auto' : 'cover',
          backgroundPosition: isMobile ? 'top center' : 'center',
        }}
        data-id="hero-background"
      ></div>
      
      {/* Dark overlay for better text visibility on mobile */}
      <div className={`absolute inset-0 ${isMobile ? 'bg-blue-900/30' : ''}`} data-id="hero-overlay"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10" data-id="hero-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center" data-id="hero-content">
          <div className="order-2 lg:order-1" data-id="hero-text">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" tabIndex={0} data-id="hero-title">
              Dr. Patrick Rajkumar
            </h1>
            <div className="h-2 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-8 shadow-lg" data-id="hero-title-underline"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-100 mb-8 font-semibold" tabIndex={0} data-id="hero-subtitle">
              Coach, Indian Blind Cricket Team
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-blue-50 max-w-2xl leading-relaxed" tabIndex={0} data-id="hero-description">
              Leading the Indian Blind Cricket Team to Three World Cup victories and transforming lives through motivational speaking.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6" data-id="hero-buttons">
              <Link to="/blogs" data-id="hero-blog-link">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 hover:from-yellow-400 hover:to-yellow-500 font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-id="hero-blog-button">
                  Read Blog
                </Button>
              </Link>
              <Link to="/talks" data-id="hero-talks-link">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 hover:from-yellow-400 hover:to-yellow-500 font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-id="hero-talks-button">
                  Book a Talk
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative" data-id="hero-video-container">
            <div className="bg-white p-4 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 transform hover:scale-105" data-id="hero-video-frame">
              <AspectRatio ratio={16 / 9} className="bg-gray-100 rounded-xl overflow-hidden shadow-inner" data-id="hero-video-aspect">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/AI-dd-Mbg_A"
                  title="Dr. Patrick Rajkumar Featured Talk"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  data-id="hero-video-iframe"
                ></iframe>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" data-id="hero-wave-container">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="fill-white w-full h-[50px] md:h-[100px]"
          data-id="hero-wave-svg"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,114.27,255.35,101,296.21,81.33,321.39,56.44Z" data-id="hero-wave-path" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
