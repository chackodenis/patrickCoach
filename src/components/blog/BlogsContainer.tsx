
import { useState, useEffect } from 'react';
import { BlogsQueryParams } from "@/hooks/useBlogs";
import { Blog } from "@/types/blog";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogList } from "@/components/blog/BlogList";
import { BlogsLoading } from "@/components/blog/BlogsLoading";
import { BlogsError } from "@/components/blog/BlogsError";
import { EmptyBlogsState } from "@/components/blog/EmptyBlogsState";

interface BlogsContainerProps {
  blogs: Blog[];
  isLoading: boolean;
  error: Error | null;
  queryParams: BlogsQueryParams;
  setQueryParams: (params: BlogsQueryParams) => void;
  showAdmin: boolean;
  onEdit: (blog: Blog) => void;
  onDelete: (blog: Blog) => void;
}

export const BlogsContainer = ({
  blogs,
  isLoading,
  error,
  queryParams,
  setQueryParams,
  showAdmin,
  onEdit,
  onDelete
}: BlogsContainerProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [localBlogs, setLocalBlogs] = useState<Blog[]>([]);

  // Update local blogs whenever the data from the query changes
  useEffect(() => {
    if (blogs) {
      setLocalBlogs(blogs);
    }
  }, [blogs]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setQueryParams({
        ...queryParams,
        searchTerm: searchInput
      });
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput, queryParams, setQueryParams]);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="blogs-container">
      <BlogHeader 
        showFilters={showFilters} 
        onToggleFilters={() => setShowFilters(!showFilters)}
        showNewButton={showAdmin}
      />

      <BlogFilters 
        searchInput={searchInput}
        onSearchChange={setSearchInput}
        sortBy={queryParams.sortBy || 'date'}
        onSortChange={(value) => setQueryParams({ ...queryParams, sortBy: value })}
        sortDirection={queryParams.sortDirection || 'desc'}
        onSortDirectionChange={(direction) => setQueryParams({ ...queryParams, sortDirection: direction })}
        showFilters={showFilters}
      />

      {isLoading && <BlogsLoading />}

      {error && <BlogsError />}

      {localBlogs && localBlogs.length > 0 && (
        <BlogList
          blogs={localBlogs}
          onEdit={onEdit}
          onDelete={onDelete}
          showAdmin={showAdmin}
        />
      )}

      {localBlogs && localBlogs.length === 0 && !isLoading && !error && (
        <EmptyBlogsState showCreateButton={showAdmin} />
      )}
    </div>
  );
};
