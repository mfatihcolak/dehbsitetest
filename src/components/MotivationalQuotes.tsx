import { motion } from 'framer-motion';

const quotes = [
  {
    text: "Her zorluk, kendini daha iyi tanıma fırsatıdır.",
    author: "ADHD Koçunuz"
  },
  {
    text: "Farklı düşünmek bir süper güçtür.",
    author: "ADHD Koçunuz"
  },
  {
    text: "Başarı, kendi yolunuzu bulmanızla başlar.",
    author: "ADHD Koçunuz"
  }
];

function MotivationalQuotes() {
  return (
    <section className="py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Günün İlham Veren Sözleri
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"></div>
              <p className="text-xl mb-6 text-white/90 italic relative">"{quote.text}"</p>
              <p className="text-sm text-purple-300 font-medium">- {quote.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default MotivationalQuotes;