
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/types/gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryImageCardProps {
  image: Image;
  onEdit?: () => void;
  showEditButton?: boolean;
}

export const GalleryImageCard = ({ image, onEdit, showEditButton = false }: GalleryImageCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      data-id={`gallery-card-${image.description}`}
    >
      <Card className="overflow-hidden group h-full bg-white/60 backdrop-blur-sm border-blue-100/50 hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-slate-50">
            <img
              src={image.src}
              alt={image.description}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              data-id={`gallery-image-${image.description}`}
            />
          </AspectRatio>
          {showEditButton && (
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={onEdit}
              data-id={`gallery-edit-button-${image.description}`}
            >
              <Edit className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="p-6 bg-gradient-to-b from-white/80 to-white">
          <p className="text-gray-700 font-medium leading-relaxed" data-id={`gallery-description-${image.description}`}>
            {image.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
