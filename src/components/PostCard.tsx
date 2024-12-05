import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <motion.article 
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-lg ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
        {post.hasImage && post.firstImage && (
          <div className="mb-6 overflow-hidden rounded-lg">
            <motion.img
              src={post.firstImage}
              alt=""
              className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
        
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {post.title}
        </h2>
        <div 
          className="text-white/70 mb-6 line-clamp-3"
          dangerouslySetInnerHTML={{ 
            __html: post.content.replace(/<img[^>]*>/g, '').substring(0, 200) + '...'
          }}
        />
        <div className="flex justify-between items-center">
          <Link 
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Devamını Oku
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <time className="text-sm text-white/50">
            {new Date(post.created_at).toLocaleDateString('tr-TR')}
          </time>
        </div>
      </div>
    </motion.article>
  );
}

export default PostCard;