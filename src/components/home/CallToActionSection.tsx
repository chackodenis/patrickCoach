
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white" data-id="cta-section">
      <div className="container mx-auto px-4 text-center" data-id="cta-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" tabIndex={0} data-id="cta-title">Ready to Transform Your Event?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10" data-id="cta-description">
          Book Dr. Patrick Rajkumar for motivational speaking, coaching, or consultation services.
        </p>
        <div className="flex flex-wrap justify-center gap-6" data-id="cta-buttons">
          <Link to="/services" data-id="cta-community-link">
            <Button className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 text-lg font-medium rounded-lg" data-id="cta-community-button">
              Community Impact
            </Button>
          </Link>
          <Link to="/talks" data-id="cta-talks-link">
            <Button className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 text-lg font-medium rounded-lg" data-id="cta-talks-button">
              Book a Talk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
