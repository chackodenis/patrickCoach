import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, X } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Service } from "@/types/service";
import { useCreateLocalService, useUpdateLocalService } from '@/hooks/useLocalServices';

interface NewImpactFormProps {
  onClose: () => void;
  onSuccess: () => void;
  editingItem?: Service;
}

export const NewImpactForm = ({ onClose, onSuccess, editingItem }: NewImpactFormProps) => {
  const { mutate: createService, isPending: isCreating } = useCreateLocalService();
  const { mutate: updateService, isPending: isUpdating } = useUpdateLocalService();
  const [formData, setFormData] = useState({
    title: editingItem?.title || '',
    description: editingItem?.description || '',
    images: [] as File[]
  });
  
  const uploading = isCreating || isUpdating;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || (!editingItem && formData.images.length === 0)) {
      toast.error("Please fill in all required fields and select at least one image");
      return;
    }

    if (editingItem) {
      // Update existing service
      updateService({
        id: editingItem.id,
        data: {
          title: formData.title,
          description: formData.description
        }
      }, {
        onSuccess: () => {
          toast.success("Impact updated successfully!");
          setFormData({ title: '', description: '', images: [] });
          onSuccess();
          onClose();
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update impact");
        }
      });
    } else {
      // Create new services for each image
      formData.images.forEach((image) => {
        createService({
          title: formData.title,
          description: formData.description,
          file: image
        }, {
          onSuccess: () => {
            toast.success("Impact images added successfully!");
            setFormData({ title: '', description: '', images: [] });
            onSuccess();
            onClose();
          },
          onError: (error) => {
            toast.error(error.message || "Failed to add impact");
          }
        });
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, images: Array.from(e.target.files || []) }));
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">
          {editingItem ? 'Edit Impact' : 'Add New Impact'}
        </CardTitle>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter impact title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Enter impact description"
              required
              className="min-h-[100px]"
            />
          </div>

          {!editingItem && (
            <div>
              <label className="block text-sm font-medium mb-1">Images</label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="cursor-pointer"
                multiple
              />
              {formData.images.length > 0 && (
                <p className="text-sm text-gray-500 mt-1">
                  {formData.images.length} image(s) selected
                </p>
              )}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={uploading}>
            {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {uploading ? "Processing..." : editingItem ? "Update Impact" : "Add Impact"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
