/*
 * Home.tsx - Abraham Tattoo CR Landing Page
 * Design System: Dark Luxury / Neo-Gothic Premium
 * Palette: #0b0b0b bg, #bfa15a gold accents
 * Typography: Playfair Display + Inter
 * All sections assembled here
 */

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ArtistSection from '../components/ArtistSection';
import GallerySection from '../components/GallerySection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import GiftCardSection from '../components/GiftCardSection';
import StudioSection from '../components/StudioSection';
import PoliciesSection from '../components/PoliciesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#0b0b0b', color: '#f0ede8' }}>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ArtistSection />
        <GallerySection />
        <BeforeAfterSection />
        <GiftCardSection />
        <StudioSection />
        <PoliciesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
