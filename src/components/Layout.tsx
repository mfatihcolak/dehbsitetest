import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import ParallaxBackground from './ParallaxBackground';
import ScrollProgress from './ScrollProgress';

function Layout() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <AnimatedBackground />
      <ParallaxBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;