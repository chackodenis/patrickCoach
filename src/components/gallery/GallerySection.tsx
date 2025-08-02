
import { motion } from "framer-motion";
import { GallerySectionHeader } from "./GallerySectionHeader";
import { GalleryImageCard } from "./GalleryImageCard";
import { GallerySection as GallerySectionType } from "@/types/gallery";

interface GallerySectionProps {
  section: GallerySectionType;
  sectionIndex: number;
  showEditButtons?: boolean;
  onEditImage?: (sectionIndex: number, imageIndex: number) => void;
}

export const GallerySection = ({ 
  section, 
  sectionIndex, 
  showEditButtons = false,
  onEditImage
}: GallerySectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      key={section.title}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: sectionIndex * 0.2 }}
      className="mb-16"
      data-id={`gallery-section-${section.title}`}
    >
      <GallerySectionHeader title={section.title} />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-id={`gallery-grid-${section.title}`}
      >
        {section.images.map((image, imageIndex) => (
          <GalleryImageCard
            key={imageIndex}
            image={image}
            showEditButton={showEditButtons}
            onEdit={() => onEditImage && onEditImage(sectionIndex, imageIndex)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
