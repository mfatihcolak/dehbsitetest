import { Post } from '../types/post';

const STORAGE_KEY = 'adhd_coach_posts';

function getInitialPosts(): Post[] {
  return [
    {
      id: 1,
      title: "ADHD ile Yaşamayı Öğrenmek",
      content: "ADHD ile yaşamak başlangıçta zor görünebilir, ancak doğru stratejilerle bu durumu avantaja çevirebilirsiniz...",
      featured: true,
      created_at: new Date().toISOString(),
      hasImage: false
    },
    {
      id: 2,
      title: "Zaman Yönetimi İpuçları",
      content: "ADHD'li bireyler için zaman yönetimi özellikle önemlidir...",
      featured: true,
      created_at: new Date().toISOString(),
      hasImage: false
    },
    {
      id: 3,
      title: "Odaklanma Teknikleri",
      content: "Odaklanma sorunlarıyla başa çıkmak için kullanabileceğiniz etkili teknikler...",
      featured: true,
      created_at: new Date().toISOString(),
      hasImage: false
    }
  ];
}

function extractFirstImage(content: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : undefined;
}

function getPosts(): Post[] {
  if (typeof window === 'undefined') return getInitialPosts();
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const initial = getInitialPosts();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  
  return JSON.parse(stored);
}

function savePosts(posts: Post[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = getPosts();
  return posts.filter(post => post.featured);
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = getPosts();
  return posts.sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export async function getPostById(id: number): Promise<Post | null> {
  const posts = getPosts();
  return posts.find(post => post.id === id) || null;
}

export async function createPost(data: { 
  title: string; 
  content: string; 
  featured: boolean 
}): Promise<boolean> {
  const posts = getPosts();
  const firstImage = extractFirstImage(data.content);
  
  const newPost: Post = {
    id: Math.max(0, ...posts.map(p => p.id)) + 1,
    ...data,
    created_at: new Date().toISOString(),
    hasImage: !!firstImage,
    firstImage
  };
  
  posts.push(newPost);
  savePosts(posts);
  return true;
}

export async function updatePost(id: number, data: Partial<Post>): Promise<boolean> {
  const posts = getPosts();
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  if (data.content) {
    const firstImage = extractFirstImage(data.content);
    data.hasImage = !!firstImage;
    data.firstImage = firstImage;
  }
  
  posts[index] = { ...posts[index], ...data };
  savePosts(posts);
  return true;
}

export async function deletePost(id: number): Promise<boolean> {
  const posts = getPosts();
  const filtered = posts.filter(p => p.id !== id);
  if (filtered.length === posts.length) return false;
  
  savePosts(filtered);
  return true;
}

export async function toggleFeatured(id: number): Promise<boolean> {
  const posts = getPosts();
  const post = posts.find(p => p.id === id);
  if (!post) return false;
  
  post.featured = !post.featured;
  savePosts(posts);
  return true;
}