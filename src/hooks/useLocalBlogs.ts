import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { localDB } from '../data/localDatabase';
import { localFileStorage } from '../utils/localFileStorage';
import { Blog, CreateBlogInput } from '../types/blog';

export interface BlogsQueryParams {
  category?: string;
  search?: string;
}

export function useLocalBlogs(params?: BlogsQueryParams) {
  return useQuery({
    queryKey: ['local-blogs', params],
    queryFn: async () => {
      const blogs = await localDB.getAll('blogs');
      
      let filteredBlogs = blogs;

      // Apply category filter
      if (params?.category) {
        filteredBlogs = filteredBlogs.filter(blog => 
          blog.category.toLowerCase() === params.category!.toLowerCase()
        );
      }

      // Apply search filter
      if (params?.search) {
        const searchTerm = params.search.toLowerCase();
        filteredBlogs = filteredBlogs.filter(blog =>
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.content.toLowerCase().includes(searchTerm)
        );
      }

      return filteredBlogs;
    },
  });
}

export function useCreateLocalBlog() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (blogData: CreateBlogInput) => {
      let imageUrl = null;

      // Handle image upload if an image is provided
      if (blogData.image_url && blogData.image_url instanceof File) {
        const file = blogData.image_url as File;
        imageUrl = await localFileStorage.uploadFile(file, 'blogs');
      }

      // Create blog post with image URL if one was uploaded
      const { image_url, ...blogDataWithoutImage } = blogData;
      const newBlog = await localDB.insert('blogs', {
        ...blogDataWithoutImage,
        image_url: imageUrl || blogData.image_url as string || null,
      });

      return newBlog;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-blogs'] });
    },
  });
}

export function useUpdateLocalBlog() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, blogData }: { id: string, blogData: Partial<CreateBlogInput> }) => {
      let imageUrl = undefined;

      // Handle image upload if a new image is provided
      if (blogData.image_url && blogData.image_url instanceof File) {
        const file = blogData.image_url as File;
        imageUrl = await localFileStorage.uploadFile(file, 'blogs');
      }

      // Create the update object with only the fields that are provided
      const updateData: any = {
        ...blogData,
      };
      
      // Only include image_url if a new image was uploaded
      if (imageUrl) {
        updateData.image_url = imageUrl;
      }
      
      // Remove the image_url from updateData if it's a File object
      if (updateData.image_url instanceof File) {
        delete updateData.image_url;
      }

      const updatedBlog = await localDB.update('blogs', id, updateData);
      return updatedBlog;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-blogs'] });
    }
  });
}

export function useDeleteLocalBlog() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const success = await localDB.delete('blogs', id);
      if (!success) {
        throw new Error('Failed to delete blog');
      }
      return success;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['local-blogs'] });
    }
  });
} 