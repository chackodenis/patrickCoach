
import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Mail, Phone, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const Talks = () => {
  
  return <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="talks-container">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 mt-8 md:mt-12 gap-6" data-id="talks-header">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300" tabIndex={0} data-id="talks-title">Book a Talk</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Invite Dr. Patrick Rajkumar for inspiring motivational talks and keynote speeches at your events
          </p>
        </div>
        <Button 
          variant="outline" 
          className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 px-8 py-3 text-lg font-semibold" 
          data-id="schedule-button"
          onClick={() => window.open('tel:+919742198935', '_self')}
        >
          <Book className="mr-3 h-5 w-5" />
          Schedule Now
        </Button>
      </div>
      
      {/* Contact Information */}
      <div className="max-w-2xl mb-12" data-id="contact-info-section">
        <Card className="p-8 space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500" data-id="contact-card">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white" tabIndex={0} data-id="contact-title">Contact Information</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors duration-300" data-id="email-container">
              <Mail className="text-blue-500 flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <a href="mailto:patrickcoach72@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300" aria-label="Send email to patrickcoach72@gmail.com" data-id="email-link">
                patrickcoach72@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors duration-300" data-id="phone-container">
              <Phone className="text-blue-500 flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <a href="tel:+919742198935" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300" aria-label="Call +91 9742198935" data-id="phone-link">
                +91 9742198935
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Invited Motivational Talks Section */}
      <div className="mb-12" data-id="motivational-talks-section">
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white" tabIndex={0} data-id="motivational-talks-title">INVITED MOTIVATIONAL TALKS</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <div className="space-y-4">
          <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500" data-id="motivational-talks-card">
            <ul className="space-y-4 md:space-y-6 list-decimal pl-8 text-gray-700 dark:text-gray-200 leading-relaxed" role="list" aria-label="List of motivational talks" data-id="motivational-talks-list">
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-1">Motivational speaker for Nethra seeds, science and Technology, a group of companies for its top management and marketing executives @ Ankit Resorts, Outskirts of Bangalore, on 26th March 2021.</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-2">Motivational speaker for Abbott Pharma company's annual conference, Jan 2020</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-3">Motivational speaker for Deutsche retail bank for annual meeting Feb 2020.</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-4">Motivational speaker and trainer for VKC brand of chapels for 4 regions- Bangalore, Mangalore, Gulbarga and Hubli, Dec 2019</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-5">One among the 12 speakers in India; selected to speak at the TEDx talk in KIIT (Kalinga institute of information Technology) and KISS (Kalinga institute of Social Sciences) Bhuveneshwar, odisha on 13th April 2018.</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-6">Motivational speaker for Nethra seeds, science and Technology, a group of companies for its top management and marketing executives @ Ankit Resorts, Outskirts of Bangalore, on 26th March 2021.</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-7">Chief guest and invited speaker at many schools, colleges and universities.</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-8">Interviewed in many national and regional TV Channels</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-9">Motivational speaker at 425th meet of Express2lead Toast Masters Club, Whitefield, Bangalore-2019</li>
              <li className="text-sm md:text-base" tabIndex={0} data-id="talk-item-10">Chief Guest at Aditya Degree College Graduation Day, Bangalore</li>
            </ul>
          </Card>
        </div>
      </div>


    </div>;
};

export default Talks;
