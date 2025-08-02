
import React, { useState } from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { NewspaperCarousel } from './NewspaperCarousel';
import { NewspaperGrid } from './NewspaperGrid';
import { NewspaperCategory as CategoryType } from '@/data/newspaperImages';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

interface NewspaperCategoryProps {
  category: CategoryType;
  isMobile: boolean;
}

export const NewspaperCategory: React.FC<NewspaperCategoryProps> = ({ category, isMobile }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(category.images.length / itemsPerPage);
  
  const paginatedImages = category.images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <TabsContent key={category.id} value={category.id} className="mt-6">
      {isMobile ? (
        <NewspaperCarousel images={paginatedImages} startIndex={(currentPage - 1) * itemsPerPage} />
      ) : (
        <NewspaperGrid images={paginatedImages} startIndex={(currentPage - 1) * itemsPerPage} />
      )}
      
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
            )}
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PaginationItem key={page}>
                <PaginationLink 
                  isActive={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </TabsContent>
  );
};
