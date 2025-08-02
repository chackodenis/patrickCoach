
import { useState, useEffect } from 'react';
import { Blog } from "@/types/blog";
import { BlogList } from "./BlogList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCategoriesProps {
  blogs: Blog[];
  activeTab: string;
  onTabChange: (value: string) => void;
  onEdit: (blog: Blog) => void;
  onDelete: (blog: Blog) => void;
  showAdmin?: boolean;
}

export function BlogCategories({
  blogs,
  activeTab,
  onTabChange,
  onEdit,
  onDelete,
  showAdmin = false
}: BlogCategoriesProps) {
  const [categories, setCategories] = useState<Record<string, Blog[]>>({});
  
  useEffect(() => {
    const categorized = blogs.reduce((acc: Record<string, Blog[]>, blog: Blog) => {
      const category = blog.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(blog);
      return acc;
    }, {});
    
    // Ensure we always have the main categories even if empty
    const defaultCategories = ['News', 'Press', 'Publications', 'Reporting'];
    defaultCategories.forEach(category => {
      if (!categorized[category]) {
        categorized[category] = [];
      }
    });
    
    setCategories(categorized);
  }, [blogs]);

  // Get unique categories for tabs
  const uniqueCategories = Object.keys(categories).filter(
    category => category !== 'Uncategorized'
  );
  
  // Add "All" category
  uniqueCategories.unshift('all');

  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full mt-6" data-id="blog-categories-tabs">
      <TabsList className="flex flex-wrap items-center gap-2 mb-6" data-id="categories-tabs-list">
        {uniqueCategories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="px-4 py-2 capitalize"
            data-id={`tab-${category.toLowerCase()}`}
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value="all" className="mt-4" data-id="tab-content-all">
        <BlogList
          blogs={blogs}
          onEdit={onEdit}
          onDelete={onDelete}
          showAdmin={showAdmin}
        />
      </TabsContent>
      
      {uniqueCategories.slice(1).map((category) => (
        <TabsContent key={category} value={category} className="mt-4" data-id={`tab-content-${category.toLowerCase()}`}>
          <BlogList
            blogs={categories[category] || []}
            onEdit={onEdit}
            onDelete={onDelete}
            showAdmin={showAdmin}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

