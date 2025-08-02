
import { Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogHeaderProps {
  showFilters: boolean;
  onToggleFilters: () => void;
  showNewButton?: boolean;
}

export function BlogHeader({ showFilters, onToggleFilters, showNewButton }: BlogHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
            Articles & Media Coverage
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          Explore our latest publications, media features, and insights from Dr. Patrick Rajkumar's journey in blind cricket coaching
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onToggleFilters}
          className="rounded-full"
          aria-label="Toggle filters"
        >
          <Filter className="h-4 w-4" />
        </Button>
        {showNewButton && (
          <Link to="/new-blog">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4" />
              New Article
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
