
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/types/service";
import { NewImpactForm } from './NewImpactForm';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImpactGridProps {
  services: Service[];
  onUpdate: () => void;
}

export const ImpactGrid = ({ services, onUpdate }: ImpactGridProps) => {
  const [editingItem, setEditingItem] = useState<Service | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card 
            key={service.id} 
            className="overflow-hidden bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative backdrop-blur-sm border-0"
          >

            {service.image_url && (
              <div className="relative pt-[56.25%] overflow-hidden">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
        <DialogContent className="sm:max-w-[600px]">
          {editingItem && (
            <NewImpactForm
              editingItem={editingItem}
              onClose={() => setEditingItem(null)}
              onSuccess={() => {
                onUpdate();
                setEditingItem(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
