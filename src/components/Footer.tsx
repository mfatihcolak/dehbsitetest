import { RiInstagramLine } from 'react-icons/ri';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <p>Email: adhdserralife@gmail.com</p>
            <p>Tel: +90 555 123 4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/adhdserralife" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-2 text-white/80 hover:text-purple-400 transition-colors"
              >
                <RiInstagramLine className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span>@adhdserralife</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Adres</h3>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p>&copy; {currentYear} ADHD Koçluk. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;