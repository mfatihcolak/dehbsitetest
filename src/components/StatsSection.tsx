import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UsersIcon, StarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    icon: UsersIcon,
    value: '500+',
    label: 'Mutlu Danışan',
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: StarIcon,
    value: '10+',
    label: 'Yıllık Deneyim',
    color: 'from-blue-400 to-indigo-400'
  },
  {
    icon: ClockIcon,
    value: '1000+',
    label: 'Seans Tamamlandı',
    color: 'from-emerald-400 to-teal-400'
  },
  {
    icon: AcademicCapIcon,
    value: '15+',
    label: 'Sertifika',
    color: 'from-amber-400 to-orange-400'
  }
];

function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-6 text-center ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-white/70">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;