
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { useCreateLocalGalleryImage } from '@/hooks/useLocalGallery';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
}

export const ImageUploader = ({ onUploadSuccess }: { onUploadSuccess: () => void }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [title, setTitle] = useState('');
  const { mutate: createImage, isPending: uploading } = useCreateLocalGalleryImage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!files || files.length === 0 || !title.trim()) {
      toast.error("Please provide both image(s) and a title");
      return;
    }

    // Upload each file
    Array.from(files).forEach((file) => {
      createImage({
        title,
        file,
        description: title
      }, {
        onSuccess: () => {
          toast.success("Image uploaded successfully!");
        },
        onError: (error) => {
          toast.error(error.message || "Failed to upload image");
        }
      });
    });

    setFiles(null);
    setTitle('');
    onUploadSuccess();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Motivational Gallery Image</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Images</label>
            <Input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange}
              className="cursor-pointer"
              multiple
            />
            {files && files.length > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                {files.length} image(s) selected
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter image description"
              required
            />
          </div>
          <Button type="submit" disabled={uploading}>
            {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {uploading ? "Uploading..." : "Upload Images"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
