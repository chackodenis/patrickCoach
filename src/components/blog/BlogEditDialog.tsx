
import { Blog } from "@/types/blog";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BlogForm } from "@/components/dashboard/BlogForm";

interface BlogEditDialogProps {
  editingBlog: Blog | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const BlogEditDialog = ({ editingBlog, onClose, onSuccess }: BlogEditDialogProps) => {
  return (
    <Dialog open={!!editingBlog} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-4 sm:p-5 mt-10" data-id="edit-blog-dialog">
        <DialogTitle className="text-lg font-medium mb-1" data-id="edit-blog-dialog-title">Edit Blog Post</DialogTitle>
        {editingBlog && (
          <BlogForm
            editingBlog={editingBlog}
            onSuccess={onSuccess}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
