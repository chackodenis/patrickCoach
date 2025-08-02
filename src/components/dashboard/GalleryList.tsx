
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useDeleteLocalGalleryImage } from '@/hooks/useLocalGallery';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
}

interface GalleryListProps {
  images: GalleryImage[];
  onDelete: () => void;
}

export const GalleryList = ({ images, onDelete }: GalleryListProps) => {
  const { mutate: deleteImage } = useDeleteLocalGalleryImage();

  const handleDelete = async (id: string, imageUrl: string) => {
    deleteImage(id, {
      onSuccess: () => {
        toast.success("Image deleted successfully");
        onDelete();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete image");
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <div className="relative">
            <img 
              src={image.image_url} 
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => handleDelete(image.id, image.image_url)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4">
            <p className="font-medium">{image.title}</p>
          </CardContent>
        </Card>
      ))}
      
      {images.length === 0 && (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">No images yet. Upload some!</p>
        </div>
      )}
    </div>
  );
};
