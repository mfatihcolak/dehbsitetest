import Hero from '../components/Hero';
import Features from '../components/Features';
import MotivationalQuotes from '../components/MotivationalQuotes';
import AboutPreview from '../components/AboutPreview';
import FeaturedPosts from '../components/FeaturedPosts';
import StatsSection from '../components/StatsSection';
import ScrollReveal from '../components/ScrollReveal';
import CertificateCarousel from '../components/CertificateCarousel';

function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delay={0.2}>
        <Features />
      </ScrollReveal>
      <ScrollReveal direction="left" delay={0.3}>
        <MotivationalQuotes />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.4}>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.5}>
        <CertificateCarousel />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.6}>
        <FeaturedPosts />
      </ScrollReveal>
    </>
  );
}

export default Home;