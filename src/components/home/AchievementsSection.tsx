
import React from 'react';
import { Card } from "@/components/ui/card";

const AchievementsSection = () => {
  return (
    <div className="py-20" data-id="achievements-section">
      <div className="container mx-auto px-4" data-id="achievements-container">
        <div className="text-center mb-16" data-id="achievements-header">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 mb-4" tabIndex={0} data-id="achievements-title">Notable Achievements</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" data-id="achievements-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" data-id="achievements-grid">
          <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-blue-500" data-id="achievement-asia-cup">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4" tabIndex={0} data-id="achievement-asia-cup-year">2016</h3>
            <p className="text-lg md:text-xl text-gray-700" tabIndex={0} data-id="achievement-asia-cup-text">Asia Cup Trophy Winner</p>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-yellow-500" data-id="achievement-rex-award">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4" tabIndex={0} data-id="achievement-rex-award-year">2017</h3>
            <p className="text-lg md:text-xl text-gray-700" tabIndex={0} data-id="achievement-rex-award-text">Rex Karamveer Award Recipient</p>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-green-500" data-id="achievement-talks">
            <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-4" tabIndex={0} data-id="achievement-talks-count">100+</h3>
            <p className="text-lg md:text-xl text-gray-700" tabIndex={0} data-id="achievement-talks-text">Motivational Talks Delivered</p>
          </Card>
          <Card className="p-8 hover:shadow-lg transition-shadow text-center border-t-4 border-purple-500" data-id="achievement-world-cup">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4" tabIndex={0} data-id="achievement-world-cup-count">3x</h3>
            <p className="text-lg md:text-xl text-gray-700" tabIndex={0} data-id="achievement-world-cup-text">Led Indian Blind Cricket Team to World Cup Wins</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
