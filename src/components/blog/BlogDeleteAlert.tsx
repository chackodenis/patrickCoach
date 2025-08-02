
import { Blog } from "@/types/blog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BlogDeleteAlertProps {
  blogToDelete: Blog | null;
  isDeleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const BlogDeleteAlert = ({ 
  blogToDelete, 
  isDeleting, 
  onCancel, 
  onConfirm 
}: BlogDeleteAlertProps) => {
  return (
    <AlertDialog open={!!blogToDelete} onOpenChange={(open) => !open && onCancel()}>
      <AlertDialogContent data-id="delete-blog-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle data-id="delete-blog-dialog-title">Are you sure?</AlertDialogTitle>
          <AlertDialogDescription data-id="delete-blog-dialog-description">
            This action cannot be undone. This will permanently delete the blog post
            "{blogToDelete?.title}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} data-id="delete-blog-cancel">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm} 
            disabled={isDeleting}
            className="bg-red-600 hover:bg-red-700"
            data-id="delete-blog-confirm"
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
