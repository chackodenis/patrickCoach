
import { useState } from 'react';
import { useLocalBlogs, BlogsQueryParams, useDeleteLocalBlog } from "@/hooks/useLocalBlogs";
import { PageLayout } from "@/components/PageLayout";
import { Blog } from "@/types/blog";
import { toast } from "@/components/ui/sonner";
import { BlogsContainer } from "@/components/blog/BlogsContainer";
import { BlogEditDialog } from "@/components/blog/BlogEditDialog";
import { BlogDeleteAlert } from "@/components/blog/BlogDeleteAlert";

const Blogs = () => {
  const [queryParams, setQueryParams] = useState<BlogsQueryParams>({
    sortBy: 'date',
    sortDirection: 'desc',
  });
  const { data: blogs = [], isLoading, error, refetch } = useLocalBlogs(queryParams);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [blogToDelete, setBlogToDelete] = useState<Blog | null>(null);

  const { mutate: deleteBlog, isPending: isDeleting } = useDeleteLocalBlog();

  const handleDelete = (blog: Blog) => {
    setBlogToDelete(blog);
  };

  const confirmDelete = () => {
    if (blogToDelete) {
      console.log("Confirming delete for blog:", blogToDelete.id);
      deleteBlog(blogToDelete.id, {
        onSuccess: () => {
          console.log("Blog deleted successfully");
          toast.success("Blog deleted successfully");
          setBlogToDelete(null);
          refetch();
        },
        onError: (error) => {
          console.error("Error during blog deletion:", error);
          toast.error(`Failed to delete blog: ${error.message}`);
        }
      });
    }
  };

  return (
    <PageLayout>
      <div data-id="blogs-page">
        <BlogsContainer 
          blogs={blogs}
          isLoading={isLoading}
          error={error}
          queryParams={queryParams}
          setQueryParams={setQueryParams}
          showAdmin={false}
          onEdit={setEditingBlog}
          onDelete={handleDelete}
        />

        <BlogEditDialog 
          editingBlog={editingBlog}
          onClose={() => setEditingBlog(null)}
          onSuccess={() => {
            refetch();
            setEditingBlog(null);
            toast.success("Blog updated successfully!");
          }}
        />

        <BlogDeleteAlert 
          blogToDelete={blogToDelete}
          isDeleting={isDeleting}
          onCancel={() => setBlogToDelete(null)}
          onConfirm={confirmDelete}
        />
      </div>
    </PageLayout>
  );
};

export default Blogs;
