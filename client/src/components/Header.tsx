/*
 * Header Component - Abraham Tattoo CR
 * Design: Fixed minimal header, dark with gold accents
 * Logo centered on mobile, left on desktop
 * Navigation: compact, gold hover states
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import content from '../content.json';

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0b0b]/95 backdrop-blur-md border-b border-[rgba(191,161,90,0.15)] shadow-lg shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo + Name */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <img
                src={content.hero.logoUrl}
                alt={content.hero.logoAlt}
                className="h-9 sm:h-11 w-auto object-contain flex-shrink-0"
                style={{ filter: 'drop-shadow(0 0 8px rgba(191,161,90,0.3))', maxWidth: '44px' }}
              />
              <span
                className="hidden sm:block text-sm font-bold tracking-widest uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span style={{ color: '#f0ede8' }}>ABRAHAM </span>
                <span style={{ color: '#bfa15a' }}>TATTOO</span>
              </span>
            </a>

            {/* Social Icons — Desktop */}
            <div className="hidden md:flex items-center gap-2 mr-2">
              {[
                { href: content.studio.whatsappLink, icon: <WhatsAppIcon />, label: 'WhatsApp' },
                { href: content.studio.instagram, icon: <Instagram size={15} />, label: 'Instagram' },
                { href: content.studio.facebook, icon: <Facebook size={15} />, label: 'Facebook' },
                { href: `mailto:${content.studio.email}`, icon: <Mail size={15} />, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    border: '1px solid rgba(191,161,90,0.25)',
                    background: 'rgba(191,161,90,0.05)',
                    color: '#bfa15a',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(191,161,90,0.18)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(191,161,90,0.05)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {content.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-[#a0a0a0] hover:text-[#bfa15a] transition-colors duration-200 tracking-wide uppercase"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em' }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={content.studio.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-4 py-2 rounded text-xs font-semibold uppercase tracking-widest"
              >
                Cotizar
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#bfa15a] hover:text-[#d4b96a] transition-colors"
              aria-label="Menú"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0d0d0d]/98 backdrop-blur-xl border-b border-[rgba(191,161,90,0.2)]"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {content.nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-3 text-base font-medium text-[#c0c0c0] hover:text-[#bfa15a] transition-colors border-b border-[rgba(255,255,255,0.05)] last:border-0"
                >
                  {item.label}
                </motion.button>
              ))}
              {/* Social icons in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-3 py-4 border-b border-[rgba(255,255,255,0.05)]"
              >
                {[
                  { href: content.studio.whatsappLink, icon: <WhatsAppIcon />, label: 'WhatsApp' },
                  { href: content.studio.instagram, icon: <Instagram size={17} />, label: 'Instagram' },
                  { href: content.studio.facebook, icon: <Facebook size={17} />, label: 'Facebook' },
                  { href: `mailto:${content.studio.email}`, icon: <Mail size={17} />, label: 'Email' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      border: '1px solid rgba(191,161,90,0.3)',
                      background: 'rgba(191,161,90,0.08)',
                      color: '#bfa15a',
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="pt-3 pb-1"
              >
                <a
                  href={content.studio.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold uppercase tracking-widest"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Cotizar por WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
