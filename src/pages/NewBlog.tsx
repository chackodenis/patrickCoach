
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateLocalBlog } from '@/hooks/useLocalBlogs';
import { toast } from "sonner";
import { CreateBlogInput } from '@/types/blog';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  external_url: z.string().url("Please enter a valid URL").or(z.string().length(0))
});

const NewBlog = () => {
  const navigate = useNavigate();
  const {
    mutate: createBlog,
    isPending
  } = useCreateLocalBlog();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<CreateBlogInput>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "News",
      external_url: ""
    }
  });

  const onSubmit = (data: CreateBlogInput) => {
    if (selectedImage) {
      data.image_url = selectedImage;
    }
    createBlog(data, {
      onSuccess: () => {
        toast.success("Blog created successfully!");
        navigate("/blogs");
      },
      onError: () => {
        toast.error("Failed to create blog");
      }
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Current date to display
  const currentDate = new Date().toISOString().split('T')[0];
  return <div className="container mx-auto px-4 py-8 max-w-4xl" data-id="new-blog-container">
      <div className="mt-16" data-id="new-blog-content">
        {/* Added margin-top (mt-8) to provide spacing from header */}
        <div className="flex items-center gap-2 mb-8 mt-8" data-id="blog-metadata">
          <div className="px-3 py-1 rounded-md bg-pink-100 dark:bg-pink-900 dark:text-pink-100 text-pink-600 text-sm" data-id="blog-category-badge">
            Reporting
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm" data-id="blog-date">
            <Calendar className="h-4 w-4" />
            <span>{new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8 dark:text-white" data-id="new-blog-title">Create New Blog Post</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-id="blog-form">
            <FormField control={form.control} name="title" render={({
            field
          }) => <FormItem data-id="form-item-title">
                  <FormLabel data-id="label-title">Blog Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter an attention-grabbing title" className="text-xl py-6" {...field} data-id="input-title" />
                  </FormControl>
                  <FormMessage data-id="message-title" />
                </FormItem>} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="form-grid">
              <FormField control={form.control} name="category" render={({
              field
            }) => <FormItem data-id="form-item-category">
                    <FormLabel data-id="label-category">Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-id="select-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent data-id="select-content-category">
                        <SelectItem value="News" data-id="category-news">News</SelectItem>
                        <SelectItem value="Press" data-id="category-press">Press</SelectItem>
                        <SelectItem value="Publications" data-id="category-publications">Publications</SelectItem>
                        <SelectItem value="Reporting" data-id="category-reporting">Reporting</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage data-id="message-category" />
                  </FormItem>} />

              <FormField control={form.control} name="external_url" render={({
              field
            }) => <FormItem data-id="form-item-url">
                    <FormLabel data-id="label-url">External URL (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/article" {...field} data-id="input-url" />
                    </FormControl>
                    <FormMessage data-id="message-url" />
                  </FormItem>} />
            </div>
            
            <div data-id="image-upload-container">
              <FormLabel className="block mb-2" data-id="label-image">Featured Image</FormLabel>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4" data-id="image-dropzone">
                {imagePreview ? <div className="relative mb-4" data-id="image-preview-container">
                    <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" data-id="image-preview" />
                    <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2" onClick={() => {
                  setSelectedImage(null);
                  setImagePreview(null);
                }} data-id="image-remove-button">
                      Remove
                    </Button>
                  </div> : <div className="text-center py-6" data-id="image-placeholder">
                    <p className="text-gray-500 dark:text-gray-400" data-id="image-placeholder-text">
                      Drag and drop an image here, or click to select a file
                    </p>
                  </div>}
                <Input type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer" data-id="image-file-input" />
              </div>
            </div>

            <FormField control={form.control} name="content" render={({
            field
          }) => <FormItem data-id="form-item-content">
                  <FormLabel data-id="label-content">Blog Content</FormLabel>
                  <FormControl>
                    <RichTextEditor content={field.value} onChange={field.onChange} className="min-h-[300px]" data-id="rich-text-editor" />
                  </FormControl>
                  <FormMessage data-id="message-content" />
                </FormItem>} />

            <div className="flex justify-end gap-4" data-id="form-actions">
              <Button type="button" variant="outline" onClick={() => navigate("/blogs")} data-id="cancel-button">
                Cancel
              </Button>
              <Button type="submit" disabled={isPending} className="px-8" data-id="publish-button">
                {isPending ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>;
};

export default NewBlog;
