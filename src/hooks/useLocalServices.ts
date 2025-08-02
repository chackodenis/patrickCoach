import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localDB } from '../data/localDatabase';
import { localFileStorage } from '../utils/localFileStorage';
import { Service } from '../types/service';

export function useLocalServices() {
  return useQuery({
    queryKey: ['local-services'],
    queryFn: async () => {
      return await localDB.getAll('services');
    },
  });
}

export function useCreateLocalService() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { title: string; description: string; file?: File }) => {
      let imageUrl = null;

      if (data.file) {
        imageUrl = await localFileStorage.uploadFile(data.file, 'services');
      }

      const newService = await localDB.insert('services', {
        title: data.title,
        description: data.description,
        image_url: imageUrl
      });

      return newService;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-services'] });
    },
  });
}

export function useUpdateLocalService() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Service> }) => {
      const updatedService = await localDB.update('services', id, data);
      return updatedService;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-services'] });
    }
  });
}

export function useDeleteLocalService() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const success = await localDB.delete('services', id);
      if (!success) {
        throw new Error('Failed to delete service');
      }
      return success;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-services'] });
    }
  });
} 