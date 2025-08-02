
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { useCreateLocalVideo } from '@/hooks/useLocalVideos';

export const VideoForm = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const { mutate: createVideo, isPending: uploadingVideo } = useCreateLocalVideo();

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoTitle.trim() || !videoUrl.trim()) {
      toast.error("Please provide both a title and YouTube URL");
      return;
    }

    createVideo({
      title: videoTitle,
      youtube_url: videoUrl
    }, {
      onSuccess: () => {
        toast.success("Video added successfully!");
        setVideoTitle('');
        setVideoUrl('');
      },
      onError: (error) => {
        toast.error(error.message || "Failed to add video");
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Video</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVideoSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input 
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="Enter video title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">YouTube URL</label>
            <Input 
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Enter YouTube video URL"
              type="url"
              required
            />
          </div>
          <Button type="submit" disabled={uploadingVideo}>
            {uploadingVideo && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {uploadingVideo ? "Adding..." : "Add Video"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
