
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface EmptyBlogsStateProps {
  showCreateButton: boolean;
}

export const EmptyBlogsState = ({ showCreateButton }: EmptyBlogsStateProps) => {
  return (
    <div className="text-center py-16 px-4" data-id="empty-blogs-container">
      <h3 className="text-xl font-medium text-gray-700 mb-2" data-id="empty-blogs-heading">No articles found</h3>
      <p className="text-gray-500 mb-8" data-id="empty-blogs-message">There are no articles matching your criteria.</p>
      {showCreateButton && (
        <Link to="/new-blog">
          <Button data-id="create-first-article-button">
            <Plus className="h-4 w-4 mr-2" />
            Create your first article
          </Button>
        </Link>
      )}
    </div>
  );
};
