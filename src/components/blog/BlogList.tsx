
import { motion } from "framer-motion";
import { Blog } from "@/types/blog";
import { BlogCard } from "@/components/BlogCard";
import { AdminActions } from "@/components/dashboard/AdminActions";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogListProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (blog: Blog) => void;
  showAdmin?: boolean;
  groupedView?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function BlogList({ blogs, onEdit, onDelete, showAdmin, groupedView = false }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  
  // Calculate total number of pages
  const totalPages = Math.max(1, Math.ceil((blogs?.length || 0) / blogsPerPage));
  
  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog) || [];
  
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to page 1 when blogs array changes
  useEffect(() => {
    setCurrentPage(1);
  }, [blogs]);

  if (groupedView && currentBlogs.length > 0) {
    // For grouped view, we need to group by category but still respect pagination
    const groupedBlogs = currentBlogs.reduce((acc, blog) => {
      if (!acc[blog.category]) {
        acc[blog.category] = [];
      }
      acc[blog.category].push(blog);
      return acc;
    }, {} as Record<string, Blog[]>);

    return (
      <>
        {Object.entries(groupedBlogs).map(([category, categoryBlogs], categoryIndex) => (
          categoryBlogs && categoryBlogs.length > 0 ? (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
              data-id={`blog-category-section-${category}`}
            >
              <div className="flex items-center gap-4 mb-8" data-id={`blog-category-header-${category}`}>
                <h2 className="text-2xl font-semibold text-blue-600" data-id={`blog-category-title-${category}`}>{category}</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent" data-id={`blog-category-divider-${category}`}></div>
              </div>
              <BlogGrid blogs={categoryBlogs} onEdit={onEdit} onDelete={onDelete} showAdmin={showAdmin} />
            </motion.div>
          ) : null
        ))}
        
        {/* Pagination */}
        {blogs && blogs.length > 0 && (
          <div className="flex justify-center items-center mt-12 gap-2" data-id="blog-pagination-grouped">
            <Button
              variant="outline"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              size="icon"
              className="flex items-center justify-center"
              data-id="blog-pagination-prev-grouped"
            >
              <ChevronLeft className="h-4 w-4" data-id="blog-pagination-prev-icon-grouped" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                onClick={() => paginate(i + 1)}
                className="w-10 h-10 flex items-center justify-center"
                data-id={`blog-pagination-page-${i + 1}-grouped`}
              >
                {i + 1}
              </Button>
            ))}
            
            <Button
              variant="outline"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              size="icon"
              className="flex items-center justify-center"
              data-id="blog-pagination-next-grouped"
            >
              <ChevronRight className="h-4 w-4" data-id="blog-pagination-next-icon-grouped" />
            </Button>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <BlogGrid blogs={currentBlogs} onEdit={onEdit} onDelete={onDelete} showAdmin={showAdmin} />
      
              {/* Pagination */}
        {blogs && blogs.length > 0 && (
          <div className="flex justify-center items-center mt-16 gap-3" data-id="blog-pagination">
                      <Button
              variant="outline"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              size="icon"
              className="flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              data-id="blog-pagination-prev"
            >
              <ChevronLeft className="h-4 w-4" data-id="blog-pagination-prev-icon" />
            </Button>
          
                      {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                onClick={() => paginate(i + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                data-id={`blog-pagination-page-${i + 1}`}
              >
                {i + 1}
              </Button>
            ))}
          
                      <Button
              variant="outline"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              size="icon"
              className="flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              data-id="blog-pagination-next"
            >
              <ChevronRight className="h-4 w-4" data-id="blog-pagination-next-icon" />
            </Button>
        </div>
      )}
    </>
  );
}

function BlogGrid({ blogs, onEdit, onDelete, showAdmin }: Omit<BlogListProps, 'groupedView'>) {
  // Calculate grid positions to maintain consistent layout
  // This ensures that when "Test" blogs are filtered out, the grid doesn't have gaps
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      style={{ display: "grid", gridAutoFlow: "dense" }}
      data-id="blog-grid"
    >
      {blogs?.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative"
          data-id={`blog-grid-item-${blog.id}`}
        >
          {showAdmin && (
            <AdminActions
              onEdit={() => onEdit(blog)}
              onDelete={() => onDelete(blog)}
              data-id={`blog-admin-actions-${blog.id}`}
            />
          )}
          <BlogCard blog={blog} />
        </motion.div>
      ))}
    </motion.div>
  );
}
