/*
 * HeroSection - Abraham Tattoo CR
 * Design: Full-screen background image (tattoo art), dark overlay
 * Big bold bicolor title (white + gold), two CTAs
 * Inspired by Jason OS Tattoo — premium, breathing, mobile-first
 */

import { motion } from 'framer-motion';
import content from '../content.json';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Best tattoo image from portfolio for hero background
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000256589_c419ade8.jpg";

export default function HeroSection() {
  const whatsappUrl = content.studio.whatsappLink;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Dark overlay — heavier at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.97) 100%)',
        }}
      />

      {/* Content — bottom-aligned like Jason OS */}
      <div className="relative z-10 px-6 sm:px-10 pb-16 sm:pb-20 pt-32 max-w-2xl w-full">
        {/* Gold divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-16 h-0.5 mb-6 origin-left"
          style={{ background: '#bfa15a' }}
        />

        {/* Big title — two lines, bicolor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-black leading-none tracking-tight mb-2"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 12vw, 5.5rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>ABRAHAM</span>
          </h1>
          <h1
            className="font-black leading-none tracking-tight mb-6"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 12vw, 5.5rem)',
              color: '#bfa15a',
            }}
          >
            TATTOO CR
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className="text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-10"
          style={{ color: 'rgba(240,237,232,0.7)', letterSpacing: '0.18em' }}
        >
          BLACK & GREY · FULL COLOR
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-4 max-w-sm"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-3 w-full py-4 sm:py-5 rounded-none text-sm sm:text-base font-bold uppercase tracking-widest shadow-xl"
            style={{ minHeight: '58px' }}
          >
            <WhatsAppIcon />
            COTIZAR AHORA
          </a>

          <a
            href="#portafolio"
            className="flex items-center justify-center w-full py-4 sm:py-5 rounded-none text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-200"
            style={{
              border: '1px solid rgba(191,161,90,0.6)',
              color: '#f0ede8',
              background: 'transparent',
              minHeight: '58px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(191,161,90,0.1)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            VER GALERÍA
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 right-6 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-10 bg-gradient-to-b from-[#bfa15a] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
