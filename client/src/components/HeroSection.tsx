/*
 * HeroSection - Abraham Tattoo CR
 * Design: Dark minimal, no giant background image
 * Subtle noise texture, centered logo, gold CTA
 * Mobile-first: feels like a native app
 */

import { motion } from 'framer-motion';
import content from '../content.json';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function HeroSection() {
  const whatsappUrl = `${content.studio.whatsappLink}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden texture-overlay"
      style={{ background: 'linear-gradient(180deg, #0b0b0b 0%, #0f1113 60%, #0b0b0b 100%)' }}
    >
      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(191,161,90,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(191,161,90,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(191,161,90,0.15)] to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 sm:py-32 max-w-2xl mx-auto w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <img
            src={content.hero.logoUrl}
            alt={content.hero.logoAlt}
            className="w-44 sm:w-56 md:w-72 h-auto object-contain mx-auto"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(191,161,90,0.3)) drop-shadow(0 0 80px rgba(191,161,90,0.12))',
              maxHeight: '220px',
            }}
          />
        </motion.div>

        {/* Studio name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
        >
          {content.studio.name}
        </motion.h1>

        {/* Tagline with gold dots */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-8 h-px bg-[#bfa15a] opacity-60" />
          <p className="text-sm sm:text-base font-medium tracking-[0.25em] uppercase text-[#bfa15a]">
            {content.studio.tagline}
          </p>
          <div className="w-8 h-px bg-[#bfa15a] opacity-60" />
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-[#6a6a6a] tracking-wide mb-10 sm:mb-12"
        >
          {content.studio.location}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="w-full max-w-xs sm:max-w-sm"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-3 w-full py-4 sm:py-5 rounded-xl text-sm sm:text-base font-semibold uppercase tracking-widest shadow-lg"
            style={{ minHeight: '56px' }}
          >
            <WhatsAppIcon />
            {content.hero.ctaText}
          </a>
          <p className="text-xs text-[#555] mt-3 tracking-wide">
            {content.hero.ctaSubtext}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-gradient-to-b from-[#bfa15a] to-transparent" />
            <div className="w-1 h-1 rounded-full bg-[#bfa15a]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
