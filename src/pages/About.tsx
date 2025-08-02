import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Award, Trophy, GraduationCap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const About = () => {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Background Image */}
      <div className="relative">
        {/* India Flag Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Saffron stripe */}
          <div className="absolute inset-0 h-1/3 bg-[#FF9933]" />
          
          {/* White stripe */}
          <div className="absolute inset-0 top-1/3 h-1/3 bg-white" />
          
          {/* Green stripe */}
          <div className="absolute inset-0 top-2/3 h-1/3 bg-[#138808]" />
          
          {/* Ashoka Chakra */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-[#000080] border-4 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 md:w-2 md:h-2 bg-[#000080] rounded-full"></div>
              </div>
              {/* 24 spokes of the Ashoka Chakra */}
              {Array.from({ length: 24 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 h-[42%] w-0.5 md:w-1 bg-[#000080] origin-bottom" 
                  style={{ transform: `translateX(-50%) rotate(${i * 15}deg)` }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Overlay for better text visibility */}
        <div className={`absolute inset-0 ${isMobile ? 'bg-white/80' : 'bg-white/90'}`}></div>
      
        {/* Profile Section */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16 md:mb-20 space-y-8 md:space-y-10 pt-24 md:pt-32">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-40"></div>
            <Avatar className="w-48 h-48 md:w-64 md:h-64 relative mx-auto">
              <AvatarImage 
                src="/lovable-uploads/fa1e84e5-3891-47eb-b33f-2e0249931fc7.png" 
                alt="Dr. Pat Profile" 
                className="rounded-full border-4 border-white shadow-xl" 
              />
              <AvatarFallback>Pat</AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300" tabIndex={0}>
              Dr. Patrick Rajkumar
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-black max-w-3xl mx-auto leading-relaxed">
              Associate Professor & H.O.D Department of Political Science
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Academic Background */}
          <Card className="transform hover:scale-105 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl group">
            <CardHeader className="flex flex-row items-center gap-4 pb-6">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <GraduationCap className="w-7 h-7 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-600" tabIndex={0}>Academic Excellence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4" role="list" aria-label="Academic achievements">
                <li className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-100/50 transition-colors" tabIndex={0}>
                  <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="font-medium">M.A Gold medalist - 1996</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-100/50 transition-colors" tabIndex={0}>
                  <Trophy className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="font-medium">NET - 1999</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-100/50 transition-colors" tabIndex={0}>
                  <BookOpen className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium">M.Phil - 2006</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-100/50 transition-colors" tabIndex={0}>
                  <GraduationCap className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <span className="font-medium">Ph.D. from Bharathiar University</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Teaching Experience */}
          <Card className="transform hover:scale-105 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl group">
            <CardHeader className="flex flex-row items-center gap-4 pb-6">
              <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <BookOpen className="w-7 h-7 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-600" tabIndex={0}>26 Years of Teaching</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4 list-none" role="list" aria-label="Teaching experience">
                <li className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-100/50 transition-colors" tabIndex={0}>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="font-medium">National law school of India university - 2 years</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-100/50 transition-colors" tabIndex={0}>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="font-medium">St. joseph's College Autonomous - 4 years</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-100/50 transition-colors" tabIndex={0}>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="font-medium">Christ University - 4 years</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-100/50 transition-colors" tabIndex={0}>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="font-medium">Bishop Cotton law college - 1 year</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-100/50 transition-colors" tabIndex={0}>
                  <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="font-medium">Government College, K.R. Puram, Bangalore - since 2007</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Publications & Presentations */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-600" tabIndex={0}>Research & Publications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-600 mb-4" tabIndex={0}>Publications</h3>
                  <p className="text-gray-700 text-lg leading-relaxed" tabIndex={0}>Published more than 25 papers in National & international journals</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-600 mb-4" tabIndex={0}>Presentations</h3>
                  <p className="text-gray-700 text-lg leading-relaxed" tabIndex={0}>Presented papers in more than 50 national & state seminars & conferences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-yellow-600" tabIndex={0}>Professional Achievements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                title: "NAAC Coordinator",
                period: "2016-18"
              }, {
                title: "IQAC Coordinator",
                period: "2009-12"
              }, {
                title: "NCC Officer",
                details: "Associate NCC officer with a rank of Captain UNTIL 2021"
              }, {
                title: "Media Presence",
                details: "Panelist in TV channels for inter religious discussion 2018"
              }, {
                title: "Academic Leadership",
                details: "BOE and Board of Studies member in multiple Autonomous Colleges"
              }, {
                title: "Election Duties",
                details: "6 Times Sectoral officer and Trainer for Assembly and Parliamentary Elections"
              }].map((achievement, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100 group">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg" tabIndex={0}>{achievement.title}</h3>
                  <p className="text-gray-700 leading-relaxed" tabIndex={0}>
                    {achievement.period || achievement.details}
                  </p>
                </div>
              ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default About;