
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import Testimonials from '@/components/home/Testimonials';
import JourneySection from '@/components/home/JourneySection';
import CallToActionSection from '@/components/home/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="index-page">
      <HeroSection />
      <AchievementsSection />
      <Testimonials />
      <JourneySection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
