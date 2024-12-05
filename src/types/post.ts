export interface Post {
  id: number;
  title: string;
  content: string;
  featured: boolean;
  created_at: string;
  hasImage?: boolean;
  firstImage?: string;
}