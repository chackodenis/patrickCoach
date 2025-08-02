import { Blog } from '../types/blog';
import { Service } from '../types/service';
import { blogPosts } from './blogs';
import { gallery } from './gallery';
import { initialVideos } from './videos';

// Define missing types
export interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  title: string;
  youtube_url: string;
  created_at: string;
  updated_at: string;
}

// Local database interface
export interface LocalDatabase {
  blogs: Blog[];
  gallery_images: GalleryImage[];
  videos: Video[];
  services: Service[];
}

// Default database structure
export const defaultDatabase: LocalDatabase = {
  blogs: [],
  gallery_images: [],
  videos: [],
  services: []
};

// Database operations
export class LocalDatabaseManager {
  private static instance: LocalDatabaseManager;
  private data: LocalDatabase;

  private constructor() {
    // Initialize with existing data or default structure
    this.data = this.loadFromFiles();
  }

  public static getInstance(): LocalDatabaseManager {
    if (!LocalDatabaseManager.instance) {
      LocalDatabaseManager.instance = new LocalDatabaseManager();
    }
    return LocalDatabaseManager.instance;
  }

  private loadFromFiles(): LocalDatabase {
    try {
      return {
        blogs: blogPosts.map((blog: any) => ({
          id: blog.id,
          title: blog.title,
          content: blog.content,
          category: blog.category,
          external_url: blog.external_url,
          image_url: blog.image_url || null,
          created_at: blog.created_at,
          updated_at: blog.updated_at || blog.created_at
        })),
        gallery_images: gallery.flatMap((section: any) => 
          section.images.map((image: any) => ({
            id: this.generateId(),
            title: section.title,
            image_url: image.src,
            description: image.description,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }))
        ),
        videos: initialVideos.map((video: any, index: number) => ({
          id: video.id || this.generateId(),
          title: video.title,
          youtube_url: video.youtube_url,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })),
        services: []
      };
    } catch (error) {
      console.error('Error loading local database:', error);
      return defaultDatabase;
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Generic CRUD operations
  public async getAll<T extends keyof LocalDatabase>(table: T): Promise<LocalDatabase[T]> {
    return this.data[table];
  }

  public async getById<T extends keyof LocalDatabase>(table: T, id: string): Promise<LocalDatabase[T][0] | null> {
    const items = this.data[table] as any[];
    return items.find(item => item.id === id) || null;
  }

  public async insert<T extends keyof LocalDatabase>(table: T, item: Omit<LocalDatabase[T][0], 'id' | 'created_at' | 'updated_at'>): Promise<LocalDatabase[T][0]> {
    const newItem = {
      ...item,
      id: this.generateId(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    } as LocalDatabase[T][0];

    (this.data[table] as any[]).push(newItem);
    return newItem;
  }

  public async update<T extends keyof LocalDatabase>(table: T, id: string, updates: Partial<LocalDatabase[T][0]>): Promise<LocalDatabase[T][0] | null> {
    const items = this.data[table] as any[];
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) return null;

    const updatedItem = {
      ...items[index],
      ...updates,
      updated_at: new Date().toISOString()
    };

    items[index] = updatedItem;
    return updatedItem;
  }

  public async delete<T extends keyof LocalDatabase>(table: T, id: string): Promise<boolean> {
    const items = this.data[table] as any[];
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) return false;

    items.splice(index, 1);
    return true;
  }

  // Export data to files (for development/debugging)
  public exportToFiles(): void {
    // This would write the data back to the JSON files
    // For now, we'll just log the current state
    console.log('Current database state:', this.data);
  }
}

// Singleton instance
export const localDB = LocalDatabaseManager.getInstance(); 