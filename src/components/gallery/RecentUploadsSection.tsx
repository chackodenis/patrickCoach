
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
}

interface RecentUploadsSectionProps {
  images: GalleryImage[];
  loading: boolean;
}

export const RecentUploadsSection = ({ images, loading }: RecentUploadsSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8" data-id="recent-uploads-loading">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" data-id="recent-uploads-spinner" />
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-16"
      data-id="recent-uploads-section"
    >
      <div className="mb-8" data-id="recent-uploads-header">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4" data-id="recent-uploads-title">Recent Gallery Updates</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" data-id="recent-uploads-divider"></div>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-id="recent-uploads-grid"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            data-id={`recent-upload-item-${image.id}`}
          >
            <Card className="overflow-hidden group h-full bg-white/60 backdrop-blur-sm border-blue-100/50 hover:shadow-xl transition-all duration-300" data-id={`recent-upload-card-${image.id}`}>
              <div className="relative overflow-hidden" data-id={`recent-upload-image-container-${image.id}`}>
                <AspectRatio ratio={4/3} className="bg-slate-50" data-id={`recent-upload-aspect-${image.id}`}>
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    data-id={`recent-upload-image-${image.id}`}
                  />
                </AspectRatio>
              </div>
              <div className="p-6 bg-gradient-to-b from-white/80 to-white" data-id={`recent-upload-content-${image.id}`}>
                <p className="text-gray-700 font-medium leading-relaxed" data-id={`recent-upload-title-${image.id}`}>
                  {image.title}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
