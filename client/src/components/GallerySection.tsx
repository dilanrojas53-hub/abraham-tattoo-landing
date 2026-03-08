/*
 * GallerySection - Abraham Tattoo CR
 * Design: Masonry grid, gold hover effects, lightbox
 * Mobile: 2 columns, Desktop: 3-4 columns
 * Lightbox: full screen with navigation
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import content from '../content.json';

interface LightboxProps {
  images: typeof content.portfolio.images;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="lightbox-overlay"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] border border-[rgba(191,161,90,0.3)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-[#8a8a8a] tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev button */}
        <button
          className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] border border-[rgba(191,161,90,0.3)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(0,0,0,0.8), 0 0 30px rgba(191,161,90,0.1)' }}
          />
        </motion.div>

        {/* Next button */}
        <button
          className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] border border-[rgba(191,161,90,0.3)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Category badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs rounded-full border border-[rgba(191,161,90,0.4)] text-[#bfa15a] bg-[rgba(0,0,0,0.6)] tracking-widest uppercase">
            {image.category}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = content.portfolio.images;

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  return (
    <section id="portafolio" className="py-24 sm:py-28" style={{ background: '#0b0b0b' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section header — big bicolor, left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2
            className="font-black leading-none tracking-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>PORTAFOLIO </span>
            <span style={{ color: '#bfa15a' }}>REAL</span>
          </h2>
          <div className="w-14 h-0.5 mt-4 mb-5" style={{ background: '#bfa15a' }} />
          <p className="text-[#6a6a6a]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            {content.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="masonry-item group relative cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                <span className="text-xs text-[#bfa15a] uppercase tracking-widest font-medium">
                  {image.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-[rgba(191,161,90,0.2)] border border-[rgba(191,161,90,0.5)] flex items-center justify-center">
                  <ZoomIn size={14} className="text-[#bfa15a]" />
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(191,161,90,0.4)] rounded-lg transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA below gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm text-[#6a6a6a] mb-5">
            ¿Te gustó lo que ves? Hablemos de tu próximo tatuaje.
          </p>
          <a
            href={content.studio.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotizar por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
