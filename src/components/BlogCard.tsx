
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { formatDistanceToNow, format } from "date-fns";
import { Blog } from "@/types/blog";
import { ExternalLink, Clock, Tag, Calendar } from "lucide-react";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  // If the blog title is "Test", don't render anything
  if (blog.title === "Test") {
    return null;
  }
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col bg-white/80 dark:bg-black backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl group"
      data-id={`blog-card-${blog.id}`}
    >
      <a 
        href={blog.external_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block h-full flex flex-col"
        data-id={`blog-card-link-${blog.id}`}
      >
        {blog.image_url && (
          <div className="relative w-full pt-[56.25%] overflow-hidden" data-id={`blog-image-container-${blog.id}`}>
            <img
              src={blog.image_url}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              data-id={`blog-image-${blog.id}`}
            />
          </div>
        )}
        <CardHeader className="pb-2" data-id={`blog-header-${blog.id}`}>
          <div className="flex items-start justify-between gap-2" data-id={`blog-title-container-${blog.id}`}>
            <CardTitle 
              className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
              data-id={`blog-title-${blog.id}`}
            >
              {blog.title}
            </CardTitle>
            <ExternalLink className="h-4 w-4 flex-shrink-0 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" data-id={`blog-external-link-icon-${blog.id}`} />
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-white mt-3" data-id={`blog-category-container-${blog.id}`}>
            <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Tag className="h-3 w-3 inline mr-1" data-id={`blog-category-icon-${blog.id}`} />
              <span className="font-medium text-xs" data-id={`blog-category-text-${blog.id}`}>{blog.category}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="py-4 flex-grow" data-id={`blog-content-${blog.id}`}>
          <div 
            className="text-gray-600 dark:text-gray-200 line-clamp-3 prose-sm leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: blog.content.substring(0, 250) + (blog.content.length > 250 ? '...' : '') 
            }}
            data-id={`blog-content-text-${blog.id}`}
          />
        </CardContent>
        
        <CardFooter 
          className="pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap justify-between bg-gray-50/50 dark:bg-gray-900/30"
          data-id={`blog-footer-${blog.id}`}
        >
          <div className="flex items-center gap-1" data-id={`blog-time-ago-${blog.id}`}>
            <Clock className="h-3.5 w-3.5" data-id={`blog-time-ago-icon-${blog.id}`} />
            <span data-id={`blog-time-ago-text-${blog.id}`}>
              {blog.created_at && formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}
            </span>
          </div>
          {blog.created_at && (
            <div className="flex items-center gap-1" data-id={`blog-date-${blog.id}`}>
              <Calendar className="h-3.5 w-3.5" data-id={`blog-date-icon-${blog.id}`} />
              <span data-id={`blog-date-text-${blog.id}`}>{format(new Date(blog.created_at), 'MMM d, yyyy')}</span>
            </div>
          )}
        </CardFooter>
      </a>
    </Card>
  );
};
