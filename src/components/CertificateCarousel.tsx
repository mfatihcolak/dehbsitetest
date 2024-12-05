import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const certificates = [
  {
    id: 1,
    title: 'Neurocoaching Okulu Sertifikası',
    image: '/images/certificate-1.jpg',
    description: 'ACTH (Approved Coach Specific Training Hours) onaylı, AçıkBeyin Eğitim ve Danışmanlık tarafından düzenlenen 65 saatlik Neurocoaching Okulu sertifikası.'
  },
  {
    id: 2,
    title: 'ADHD Koçluk Sertifikası',
    image: '/images/certificate-2.jpg',
    description: 'ACTH onaylı, JST Coaching & Training tarafından düzenlenen 40 saatlik "Coaching Teens & College Students with ADHD" sertifikası.'
  }
];

function CertificateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Sertifikalarım
      </motion.h2>

      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-4 md:p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="relative w-full md:w-2/3 aspect-[4/3] rounded-lg overflow-hidden">
                  <picture>
                    <source srcSet={certificates[currentIndex].image.replace('.jpg', '.webp')} type="image/webp" />
                    <img
                      src={certificates[currentIndex].image}
                      alt={certificates[currentIndex].title}
                      className="w-full h-full object-contain bg-black/50"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {certificates[currentIndex].title}
                  </h3>
                  <p className="text-white/80">
                    {certificates[currentIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 md:-left-4 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors transform hover:scale-110"
              aria-label="Previous certificate"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 md:-right-4 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors transform hover:scale-110"
              aria-label="Next certificate"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateCarousel;