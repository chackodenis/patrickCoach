
import { motion } from "framer-motion";
import { GalleryHorizontal } from "lucide-react";

export const GalleryHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
      data-id="gallery-header"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <GalleryHorizontal className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300" data-id="gallery-title">
            Gallery Portfolio
          </h1>
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" data-id="gallery-subtitle">
          Explore our journey through memorable moments, achievements, and impactful events
        </p>
      </div>
    </motion.div>
  );
};
