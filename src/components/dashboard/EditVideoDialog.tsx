
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdateLocalVideo } from '@/hooks/useLocalVideos';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface EditVideoDialogProps {
  video: {
    id: string;
    title: string;
    youtube_url: string;
  };
  open: boolean;
  onClose: () => void;
}

export const EditVideoDialog = ({ video, open, onClose }: EditVideoDialogProps) => {
  const [title, setTitle] = useState(video.title);
  const [youtubeUrl, setYoutubeUrl] = useState(video.youtube_url);
  const { mutate: updateVideo, isPending: isSubmitting } = useUpdateLocalVideo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    updateVideo({
      id: video.id,
      data: {
        title,
        youtube_url: youtubeUrl
      }
    }, {
      onSuccess: () => {
        toast.success("Video updated successfully");
        onClose();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to update video");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Video</DialogTitle>
          <DialogDescription>
            Make changes to the video information below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter video title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">YouTube URL</label>
            <Input
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="Enter YouTube video URL"
              type="url"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSubmitting ? "Updating..." : "Update Video"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
