import { motion } from 'framer-motion';

function About() {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Hakkımda
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        {/* Profile Section */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-48 h-48 rounded-2xl overflow-hidden group flex-shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img 
                  src="/profile-placeholder-1.jpg" 
                  alt="ADHD Koçu" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-2 ring-purple-500/50 rounded-2xl"></div>
              </motion.div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative mb-4">
                  Merhaba! Ben Mürvet.
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  40 yaşından sonra Dikkat Eksikliği Ve Hiperaktivite Bozukluğu tanısı konmuş biri olarak, 
                  bu süreçte edindiğim deneyimlerimi ve öğrendiklerimi sizlerle paylaşmak niyetindeyim.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Card */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 space-y-6 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
            <p className="text-lg text-white/80 leading-relaxed">
              Kendi hayatımda, DEHB'i tanıdıktan sonra nasıl bir dönüşüm yaşadığımı ve bu farkındalığın 
              bana nasıl yol gösterdiğini anlatmak benim için çok önemli. Çünkü DEHB ile yaşarken hayatı 
              yönetmenin mümkün olduğunu biliyorum; yeter ki, problemlerimizi ve çözümlerimizi doğru anlayalım.
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 space-y-6 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
            <p className="text-lg text-white/80 leading-relaxed">
              Eğer DEHB fark edilirse ve doğru bir şekilde yönetilirse, insan için adeta bir cennete dönüşebilir. 
              Bu farkındalık, sadece sorunları çözmekle kalmaz aynı zamanda kendimizi ve potansiyelimizi daha iyi 
              tanımamıza da olanak sağlar. Bu süreçte, DEHB'i bir düşman olarak görmek yerine, doğru bir rehberle 
              hayatta bir avantaja dönüştürebileceğimizi ve hayatı kendimiz için kolay yaşanır hale getirebileceğimizi anladım.
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 space-y-6 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-xl"></div>
            <p className="text-lg text-white/80 leading-relaxed">
              En büyük amacım, sizin de bu yolda yalnız olmadığınızı hissetmenizi sağlamak ve sizlere destek olmak. 
              Anlaşılmak benim için en önemli değerdir. Bir DEHB'linin kendini anlaması ve çevresi tarafından anlaşılması, 
              bu cennetin giriş kapısıdır. Krizleri fırsata çevirmek, onlar için de mümkün.
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl rounded-lg p-8 space-y-6 ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500">
            <p className="text-lg text-white/80 leading-relaxed">
              Meraklı, öğrenmeyi seven ve sürekli araştıran biri olarak, buradaki her bilgi ve kaynak, 
              titizlikle oluşturuldu ve sizlere en iyisini sunmak için hazırlandı. Kendi kişisel tecrübelerimden 
              yola çıkarak hazırladığım bu web sitesiyle, DEHB tanısı almış bireyleri ve onların ailelerini bu 
              orijinal ve sıradışı yolculuğa çıkmaya davet ediyorum. Çünkü DEHB'li biri olmak ve DEHB'li biriyle 
              yaşamak, Alice Harikalar Diyarına yolculuk yapmak gibidir.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;