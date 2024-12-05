import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPreview() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="py-16"
    >
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 rounded-full overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
              <picture>
                <source srcSet="/images/profile.webp" type="image/webp" />
                <img 
                  src="/images/profile.jpg" 
                  alt="ADHD Koçu Mürvet Serra" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 ring-2 ring-purple-500/50 rounded-full"></div>
            </motion.div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hakkımda
              </h2>
              <p className="text-lg mb-6 text-white/80">
                10 yıllık deneyimli ADHD koçu olarak, sizlere yaşam kalitenizi artırma ve potansiyelinizi
                keşfetme konusunda rehberlik ediyorum. Her bireyin kendine özgü olduğuna inanıyor ve
                kişiselleştirilmiş çözümler sunuyorum.
              </p>
              <Link 
                to="/hakkimda" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover-glow"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutPreview;