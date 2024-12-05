import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          style={{ y, opacity }}
          className="text-center relative"
        >
          {/* Animated background blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
              ADHD Koçluğuna<br/>Hoş Geldiniz
            </h1>
            
            <p className="text-2xl text-white/80 mb-12 leading-relaxed">
              Dikkat eksikliği ve hiperaktivite ile başa çıkmanın<br/>yollarını birlikte keşfedelim.
            </p>
            
            <div className="flex justify-center gap-6">
              <Link
                to="/hakkimda"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover-glow relative overflow-hidden group"
              >
                <span className="relative z-10">Tanışalım</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                to="/blog"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Blog Yazıları</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Wave Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      >
        <svg className="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 50 Q360 20 720 50 T1440 50"
            stroke="url(#wave-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M0 50 Q360 20 720 50 T1440 50;
                M0 50 Q360 80 720 50 T1440 50;
                M0 50 Q360 20 720 50 T1440 50
              "
            />
          </motion.path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;