import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BeakerIcon, 
  SparklesIcon, 
  HeartIcon, 
  ClockIcon, 
  UserGroupIcon, 
  LightBulbIcon, 
  ChatBubbleLeftRightIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Kişiselleştirilmiş Yaklaşım',
    description: 'Her danışanın benzersiz ihtiyaçlarına özel stratejiler geliştiriyoruz.',
    color: 'from-purple-500 to-pink-500',
    Icon: BeakerIcon
  },
  {
    title: 'Yaratıcı Çözümler',
    description: "ADHD'nin güçlü yönlerini keşfedip avantaja çeviriyoruz.",
    color: 'from-blue-500 to-indigo-500',
    Icon: SparklesIcon
  },
  {
    title: 'Empatik Yaklaşım',
    description: 'Sizin deneyimlerinizi anlıyor ve destekliyoruz.',
    color: 'from-rose-500 to-red-500',
    Icon: HeartIcon
  },
  {
    title: 'Esnek Programlama',
    description: 'Size en uygun zamanda görüşme imkanı sunuyoruz.',
    color: 'from-emerald-500 to-teal-500',
    Icon: ClockIcon
  },
  {
    title: 'Grup Çalışmaları',
    description: 'Benzer deneyimleri paylaşan kişilerle bir araya gelin.',
    color: 'from-amber-500 to-orange-500',
    Icon: UserGroupIcon
  },
  {
    title: 'Sürekli Gelişim',
    description: 'En güncel ADHD yönetim teknikleri ve araştırmaları.',
    color: 'from-yellow-500 to-amber-500',
    Icon: LightBulbIcon
  },
  {
    title: 'Online Danışmanlık',
    description: 'Uzaktan erişim ile her yerden destek alın.',
    color: 'from-cyan-500 to-blue-500',
    Icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Hedef Odaklı',
    description: 'Potansiyelinizi maksimuma çıkarmanıza yardımcı oluyoruz.',
    color: 'from-violet-500 to-purple-500',
    Icon: RocketLaunchIcon
  }
];

function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      </div>

      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Hizmetlerimiz
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-6 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <feature.Icon className="h-12 w-12 mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;