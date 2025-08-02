
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useCreateLocalBlog, useUpdateLocalBlog } from "@/hooks/useLocalBlogs";
import { Blog } from "@/types/blog";
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

interface BlogFormProps {
  onSuccess?: () => void;
  editingBlog?: Blog;
  onClose?: () => void;
}

export const BlogForm = ({ onSuccess = () => {}, editingBlog, onClose }: BlogFormProps) => {
  const [formData, setFormData] = useState({
    title: editingBlog?.title || '',
    content: editingBlog?.content || '',
    category: editingBlog?.category || 'News',
    external_url: editingBlog?.external_url || '',
    images: [] as File[]
  });
  
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(editingBlog?.image_url || null);
  
  const { mutate: createBlog } = useCreateLocalBlog();
  const { mutate: updateBlog } = useUpdateLocalBlog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.category || !formData.external_url) {
      toast.error("Please fill in all required fields");
      return;
    }

    setUploading(true);

    try {
      if (editingBlog) {
        console.log("Updating blog post with ID:", editingBlog.id);
        
        // Prepare update data
        const updateData: any = {
          title: formData.title,
          content: formData.content,
          category: formData.category,
          external_url: formData.external_url,
        };
        
        // Only include image if there's a new one
        if (formData.images.length > 0) {
          updateData.image_url = formData.images[0];
        }
        
        updateBlog(
          { 
            id: editingBlog.id, 
            blogData: updateData
          },
          {
            onSuccess: (data) => {
              console.log("Blog updated successfully");
              toast.success("Blog post updated successfully!");
              if (onSuccess) onSuccess();
              if (onClose) onClose();
            },
            onError: (error: Error) => {
              console.error("Error updating blog:", error);
              toast.error(error.message || "Failed to update blog post");
            },
            onSettled: () => {
              setUploading(false);
            }
          }
        );
      } else {
        // Create new blog
        createBlog(
          {
            title: formData.title,
            content: formData.content,
            category: formData.category,
            external_url: formData.external_url,
            ...(formData.images.length > 0 && { image_url: formData.images[0] })
          },
          {
            onSuccess: () => {
              toast.success("Blog post created successfully!");
              setFormData({ title: '', content: '', category: 'News', external_url: '', images: [] });
              setImagePreview(null);
              if (onSuccess) onSuccess();
              if (onClose) onClose();
            },
            onError: (error: Error) => {
              toast.error(error.message || "Failed to create blog post");
            },
            onSettled: () => {
              setUploading(false);
            }
          }
        );
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to process blog post");
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, images: [file] }));
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">Title</label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          placeholder="Enter blog title"
          className="w-full"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">Content</label>
        <div className="border rounded-md">
          <RichTextEditor
            content={formData.content}
            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
            className="min-h-[200px] p-1"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">Category</label>
        <Select
          value={formData.category}
          onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="News">News</SelectItem>
            <SelectItem value="Press">Press</SelectItem>
            <SelectItem value="Publications">Publications</SelectItem>
            <SelectItem value="Reporting">Reporting</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">External URL</label>
        <Input
          value={formData.external_url}
          onChange={(e) => setFormData(prev => ({ ...prev, external_url: e.target.value }))}
          placeholder="Enter external URL for the blog"
          className="w-full"
          type="url"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium mb-2">Images {editingBlog ? '(Optional)' : ''}</label>
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
          {imagePreview ? (
            <div className="relative mb-4">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-lg" 
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => {
                  setFormData(prev => ({ ...prev, images: [] }));
                  setImagePreview(null);
                }}
              >
                Remove
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Drag and drop an image here, or click to select a file
              </p>
            </div>
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="cursor-pointer mt-2"
          />
        </div>
        
        {editingBlog?.image_url && formData.images.length === 0 && !imagePreview && (
          <p className="text-sm text-blue-500 mt-2">
            Current image will be kept unless a new one is selected
          </p>
        )}
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full" disabled={uploading}>
          {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {uploading ? "Processing..." : editingBlog ? "Update Blog Post" : "Create Blog Post"}
        </Button>
      </div>
    </form>
  );
};
