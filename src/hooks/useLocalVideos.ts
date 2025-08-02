import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localDB } from '../data/localDatabase';
import { Video } from '../data/localDatabase';

export function useLocalVideos() {
  return useQuery({
    queryKey: ['local-videos'],
    queryFn: async () => {
      return await localDB.getAll('videos');
    },
  });
}

export function useCreateLocalVideo() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { title: string; youtube_url: string }) => {
      const newVideo = await localDB.insert('videos', {
        title: data.title,
        youtube_url: data.youtube_url,
      });

      return newVideo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-videos'] });
    },
  });
}

export function useUpdateLocalVideo() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Video> }) => {
      const updatedVideo = await localDB.update('videos', id, data);
      return updatedVideo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-videos'] });
    }
  });
}

export function useDeleteLocalVideo() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const success = await localDB.delete('videos', id);
      if (!success) {
        throw new Error('Failed to delete video');
      }
      return success;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-videos'] });
    }
  });
} 