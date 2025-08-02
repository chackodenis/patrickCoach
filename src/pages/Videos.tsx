
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Video as VideoIcon } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { toast } from "@/components/ui/sonner";
import { VideoForm } from "@/components/dashboard/VideoForm";
import { AdminActions } from "@/components/dashboard/AdminActions";
import { EditVideoDialog } from "@/components/dashboard/EditVideoDialog";
import { useLocalVideos, useDeleteLocalVideo } from "@/hooks/useLocalVideos";

const Videos = () => {
  const [videoToEdit, setVideoToEdit] = useState<{ id: string; title: string; youtube_url: string } | null>(null);

  const { data: videos = [], isLoading, error } = useLocalVideos();

  const { mutate: deleteVideo, isPending: isDeleting } = useDeleteLocalVideo();

  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleEdit = (video: { id: string; title: string; youtube_url: string }) => {
    setVideoToEdit(video);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      deleteVideo(id, {
        onSuccess: () => {
          toast.success("Video deleted successfully");
        },
        onError: (error) => {
          toast.error(`Failed to delete video: ${error.message}`);
        }
      });
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="videos-page">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6" data-id="videos-header">
          <div className="space-y-4" data-id="videos-title-section">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300" data-id="videos-title">
                Videos & Media
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed" data-id="videos-subtitle">
              Explore our featured videos and media appearances showcasing Dr. Patrick Rajkumar's journey
            </p>
          </div>
        </div>



        {isLoading ? (
          <div className="flex items-center justify-center h-64" data-id="videos-loading">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" data-id="videos-loading-spinner" />
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-100" data-id="videos-error">
            <p className="text-red-600" data-id="videos-error-message">Error loading videos. Please try again later.</p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            data-id="videos-grid"
          >
            {videos && videos.length > 0 ? videos.map((video) => {
              const videoId = getYoutubeVideoId(video.youtube_url);
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative backdrop-blur-sm border-0"
                  data-id={`video-card-${video.id}`}
                >

                  <div className="aspect-video relative group" data-id={`video-player-${video.id}`}>
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        data-id={`video-iframe-${video.id}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100" data-id={`video-placeholder-${video.id}`}>
                        <VideoIcon className="h-12 w-12 text-gray-400" data-id={`video-placeholder-icon-${video.id}`} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" data-id={`video-overlay-${video.id}`}>
                      <a
                        href={video.youtube_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                        data-id={`video-play-button-${video.id}`}
                      >
                        <Play className="h-6 w-6" data-id={`video-play-icon-${video.id}`} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6" data-id={`video-content-${video.id}`}>
                    <h3 className="text-lg font-semibold line-clamp-2 mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" data-id={`video-title-${video.id}`}>
                      {video.title}
                    </h3>
                    <a
                      href={video.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm inline-flex items-center gap-2 font-medium transition-colors duration-300"
                      data-id={`video-youtube-link-${video.id}`}
                    >
                      <VideoIcon className="h-4 w-4" data-id={`video-youtube-icon-${video.id}`} />
                      <span data-id={`video-youtube-text-${video.id}`}>Watch on YouTube</span>
                    </a>
                  </div>
                </motion.div>
              );
            }) : (
              <div className="col-span-full text-center py-16" data-id="videos-empty-state">
                <VideoIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" data-id="videos-empty-icon" />
                <p className="text-gray-600 dark:text-gray-300 text-lg" data-id="videos-empty-text">No videos available yet.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
      {videoToEdit && (
        <EditVideoDialog
          video={videoToEdit}
          open={!!videoToEdit}
          onClose={() => setVideoToEdit(null)}
        />
      )}
    </PageLayout>
  );
};

export default Videos;
