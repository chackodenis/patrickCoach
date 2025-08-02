
import { useEffect, useState } from 'react';
import { PageLayout } from "./PageLayout";
import { gallery } from "@/data/gallery";
import { GalleryEditDialog } from './GalleryEditDialog';
import { ImageUploader } from './dashboard/ImageUploader';
import { GalleryList } from './dashboard/GalleryList';
import { GalleryHeader } from './gallery/GalleryHeader';
import { GallerySection } from './gallery/GallerySection';
import { RecentUploadsSection } from './gallery/RecentUploadsSection';
import { GallerySection as GallerySectionType } from '@/types/gallery';
import { useLocalGallery } from '@/hooks/useLocalGallery';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
}

const Gallery = () => {
  const { data: uploadedImages = [], isLoading: loading } = useLocalGallery();
  const [editingImage, setEditingImage] = useState<{ section: number; index: number; } | null>(null);
  const [galleryData, setGalleryData] = useState<GallerySectionType[]>(gallery);

  const handleEditDescription = (sectionIndex: number, imageIndex: number) => {
    setEditingImage({ section: sectionIndex, index: imageIndex });
  };

  const handleSaveDescription = (newDescription: string) => {
    if (editingImage) {
      const newGalleryData = [...galleryData];
      newGalleryData[editingImage.section].images[editingImage.index].description = newDescription;
      setGalleryData(newGalleryData);
      setEditingImage(null);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="gallery-container">
        <GalleryHeader />



        {/* Dynamic Gallery Section */}
        <RecentUploadsSection images={uploadedImages} loading={loading} />

        {/* Static Gallery Sections */}
        {galleryData.map((section, sectionIndex) => (
          <GallerySection
            key={section.title}
            section={section}
            sectionIndex={sectionIndex}
            showEditButtons={false}
            onEditImage={handleEditDescription}
          />
        ))}
      </div>

      {editingImage && (
        <GalleryEditDialog
          isOpen={true}
          onClose={() => setEditingImage(null)}
          onSave={handleSaveDescription}
          currentDescription={galleryData[editingImage.section].images[editingImage.index].description}
          imageSrc={galleryData[editingImage.section].images[editingImage.index].src}
        />
      )}
    </PageLayout>
  );
};

export default Gallery;
