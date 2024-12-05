import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPost } from '../../lib/db';

function NewPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    featured: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost(formData);
      navigate('/admin');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Yazı oluşturulurken bir hata oluştu.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Yeni Yazı Ekle
      </motion.h1>

      <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-white/90 mb-2">
                  Başlık
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-white/90 mb-2">
                  İçerik
                </label>
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  required
                  rows={10}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-y"
                  placeholder="İçeriğinizi buraya yazın..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="form-checkbox text-purple-600 rounded border-white/20 bg-white/5"
                />
                <label htmlFor="featured" className="ml-2 text-sm text-white/90">
                  Öne Çıkan Yazı
                </label>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/admin')}
                  className="px-6 py-3 rounded-lg border border-white/10 text-white/90 hover:bg-white/5 transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover-glow"
                >
                  Yazıyı Yayınla
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.form>
    </div>
  );
}

export default NewPost;