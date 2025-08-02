
export interface Blog {
  id: string;
  title: string;
  content: string;
  image_url?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  category: string;
  external_url: string;
}

export interface CreateBlogInput {
  title: string;
  content: string;
  image_url?: File | string;
  category: string;
  external_url: string;
}
