import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localDB } from '../data/localDatabase';
import { localFileStorage } from '../utils/localFileStorage';
import { GalleryImage } from '../data/localDatabase';

export function useLocalGallery() {
  return useQuery({
    queryKey: ['local-gallery'],
    queryFn: async () => {
      return await localDB.getAll('gallery_images');
    },
  });
}

export function useCreateLocalGalleryImage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { title: string; file: File; description?: string }) => {
      const imageUrl = await localFileStorage.uploadFile(data.file, 'gallery');
      
      const newImage = await localDB.insert('gallery_images', {
        title: data.title,
        image_url: imageUrl,
        description: data.description || '',
      });

      return newImage;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-gallery'] });
    },
  });
}

export function useUpdateLocalGalleryImage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<GalleryImage> }) => {
      const updatedImage = await localDB.update('gallery_images', id, data);
      return updatedImage;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-gallery'] });
    }
  });
}

export function useDeleteLocalGalleryImage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const success = await localDB.delete('gallery_images', id);
      if (!success) {
        throw new Error('Failed to delete gallery image');
      }
      return success;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-gallery'] });
    }
  });
} 