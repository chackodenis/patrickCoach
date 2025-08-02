
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

interface GalleryEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newDescription: string) => void;
  currentDescription: string;
  imageSrc: string;
}

export function GalleryEditDialog({
  isOpen,
  onClose,
  onSave,
  currentDescription,
  imageSrc,
}: GalleryEditDialogProps) {
  const [description, setDescription] = useState(currentDescription);

  const handleSave = () => {
    if (!description.trim()) {
      toast.error("Description cannot be empty");
      return;
    }
    onSave(description);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]" data-id="gallery-edit-dialog">
        <DialogHeader>
          <DialogTitle data-id="gallery-edit-dialog-title">Edit Image Description</DialogTitle>
          <DialogDescription data-id="gallery-edit-dialog-description">
            Update the description for this gallery image.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative aspect-video" data-id="gallery-edit-image-container">
            <img
              src={imageSrc}
              alt="Gallery image"
              className="rounded-lg object-cover w-full h-full"
              data-id="gallery-edit-image"
            />
          </div>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter image description"
            className="min-h-[100px]"
            data-id="gallery-edit-description-input"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} data-id="gallery-edit-cancel">Cancel</Button>
          <Button onClick={handleSave} data-id="gallery-edit-save">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
