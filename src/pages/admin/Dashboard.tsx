import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllPosts, deletePost, toggleFeatured } from '../../lib/db';
import { PencilIcon, TrashIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { Post } from '../../types/post';

function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Bu yazıyı silmek istediğinizden emin misiniz?')) {
      const success = await deletePost(id);
      if (success) {
        await fetchPosts();
      }
    }
  };

  const handleToggleFeatured = async (id: number) => {
    const success = await toggleFeatured(id);
    if (success) {
      await fetchPosts();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Admin Panel
        </motion.h1>
        <Link 
          to="/admin/new-post"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover-glow"
        >
          <PencilIcon className="h-5 w-5" />
          Yeni Yazı Ekle
        </Link>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-6 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {post.title}
                </h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleToggleFeatured(post.id)}
                    className={`transition-colors ${post.featured ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-300`}
                    title={post.featured ? 'Öne çıkarılmış' : 'Öne çıkar'}
                  >
                    {post.featured ? (
                      <StarIconSolid className="h-6 w-6" />
                    ) : (
                      <StarIcon className="h-6 w-6" />
                    )}
                  </button>
                  <Link 
                    to={`/admin/edit/${post.id}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-white/70 line-clamp-2 mb-4">{post.content}</p>
              <time className="text-sm text-white/50">
                {new Date(post.created_at).toLocaleDateString('tr-TR')}
              </time>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;