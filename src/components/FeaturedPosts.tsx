import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Post } from '../types/post';
import PostCard from './PostCard';
import { getFeaturedPosts } from '../lib/db';

function FeaturedPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const featuredPosts = await getFeaturedPosts();
      setPosts(featuredPosts);
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Öne Çıkan Yazılar
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;