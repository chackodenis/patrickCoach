
import { motion } from "framer-motion";

interface GallerySectionHeaderProps {
  title: string;
}

export const GallerySectionHeader = ({ title }: GallerySectionHeaderProps) => {
  return (
    <div className="mb-8" data-id={`gallery-section-header-${title}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4" data-id={`gallery-section-title-${title}`}>{title}</h2>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
    </div>
  );
};
