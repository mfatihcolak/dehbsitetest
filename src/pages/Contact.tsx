import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("4ouRsbfdya91jOYl9"); // Replace with your actual public key

      await emailjs.send(
        'service_ygzb48r', // Replace with your EmailJS service ID
        'template_ihsqivc', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'ADHD Koçluk'
        }
      );

      toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', {
        duration: 5000,
        style: {
          background: '#1F2937',
          color: '#fff',
          borderRadius: '0.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        },
        icon: '✨'
      });

      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      toast.error('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.', {
        duration: 5000,
        style: {
          background: '#1F2937',
          color: '#fff',
          borderRadius: '0.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <Toaster position="top-right" />
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        İletişim
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-6">İletişim Formu</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={6}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg bg-purple-600 text-white transition-all duration-300 hover:scale-105 hover-glow flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-700'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Gönderiliyor...
                    </div>
                  ) : (
                    'Gönder'
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
              <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Adres</h3>
                    <p className="text-white/80">[Adres Bilgileri]</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Telefon</h3>
                    <p className="text-white/80">+90 555 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">E-posta</h3>
                    <p className="text-white/80">adhdserralife@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Çalışma Saatleri</h3>
                    <p className="text-white/80">
                      Pazartesi - Cuma: 09:00 - 18:00<br/>
                      Cumartesi: 10:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;