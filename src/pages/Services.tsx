
import React, { useState } from 'react';
import { useLocalServices } from "@/hooks/useLocalServices";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { QuoteSection } from "@/components/services/QuoteSection";
import { NewImpactForm } from "@/components/services/NewImpactForm";
import { ImpactGrid } from "@/components/services/ImpactGrid";

const ServicesPage = () => {
  const { data: services = [], isLoading, refetch } = useLocalServices();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="services-page">
      <QuoteSection />

      <div className="mb-16 mt-12" data-id="community-impact-section">
        <div className="text-center mb-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300" data-id="community-impact-title">
                Community Impact
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover the transformative impact Dr. Patrick Rajkumar has made in the blind cricket community and beyond
            </p>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16" data-id="services-loading">
          <Loader2 className="h-10 w-10 animate-spin text-blue-500" data-id="services-loading-spinner" />
        </div>
      ) : services && services.length > 0 ? (
        <ImpactGrid services={services} onUpdate={refetch} />
      ) : (
        <div className="text-center py-16 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border-0 backdrop-blur-sm" data-id="services-empty-state">
          <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4" data-id="services-empty-title">No impacts available yet</h3>
          <p className="text-gray-500 dark:text-gray-400" data-id="services-empty-description">Check back later for updates on our community impacts.</p>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
