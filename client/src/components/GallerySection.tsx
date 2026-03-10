/*
 * GallerySection - Abraham Tattoo CR
 * Design: Dark Luxury / Neo-Gothic Premium
 * REDISEÑO: 12 fotos iniciales + "Ver más", texto 1.125rem, py-32, filtros rectangulares
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ChevronDown } from 'lucide-react';
import content from '../content.json';

type GalleryItem = (typeof content.portfolio.images)[number];

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[currentIndex];
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
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(191,161,90,0.4)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-[#8a8a8a] tracking-widest">
          {currentIndex + 1} / {items.length}
        </div>
        <button
          className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(191,161,90,0.3)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft size={20} />
        </button>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.url}
            alt={item.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(0,0,0,0.9), 0 0 30px rgba(191,161,90,0.08)' }}
          />
        </motion.div>
        <button
          className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] border border-[rgba(191,161,90,0.3)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight size={20} />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 text-xs rounded-full border border-[rgba(191,161,90,0.5)] text-[#bfa15a] bg-[rgba(0,0,0,0.7)] tracking-widest uppercase font-medium">
            {item.category}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const FILTERS = ['Todos', 'Ilustrativo a Color', 'Black & Grey', 'Covers', 'Detalles Pequeños'];
const INITIAL_VISIBLE = 12;

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allImages = content.portfolio.images;
  const filteredImages = activeFilter === 'Todos'
    ? allImages
    : allImages.filter((img) => img.category === activeFilter);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredImages.length > INITIAL_VISIBLE && !showAll;

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filteredImages.length) % filteredImages.length : null));
  }, [filteredImages.length]);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filteredImages.length : null));
  }, [filteredImages.length]);

  useEffect(() => {
    setLightboxIndex(null);
    setShowAll(false);
  }, [activeFilter]);

  return (
    <section id="portafolio" className="py-32 sm:py-40" style={{ background: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px" style={{ background: '#bfa15a' }} />
            <span className="text-xs uppercase tracking-[0.35em] font-semibold" style={{ color: '#bfa15a' }}>
              Portafolio Real
            </span>
          </div>
          <h2
            className="font-black leading-none tracking-tight mb-5"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.8rem, 9vw, 5rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>NUESTRO </span>
            <span style={{ color: '#bfa15a' }}>TRABAJO</span>
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#7a7a7a', maxWidth: '480px' }}>
            Cada pieza es única, diseñada especialmente para ti.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-wrap">
            {FILTERS.map((filter) => {
              const count = filter === 'Todos'
                ? allImages.length
                : allImages.filter((img) => img.category === filter).length;
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className="flex-shrink-0 px-5 py-2.5 text-sm font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none"
                  style={{
                    background: isActive ? '#bfa15a' : 'rgba(255,255,255,0.04)',
                    color: isActive ? '#0b0b0b' : '#6a6a6a',
                    border: isActive ? '1px solid #bfa15a' : '1px solid rgba(191,161,90,0.18)',
                    borderRadius: '2px',
                  }}
                >
                  {filter}
                  <span
                    className="ml-2 text-xs font-bold"
                    style={{ color: isActive ? 'rgba(11,11,11,0.55)' : 'rgba(191,161,90,0.45)' }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + String(showAll)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="masonry-grid"
          >
            {visibleImages.map((image, index) => {
              const globalIdx = filteredImages.indexOf(image);
              return (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
                  className="masonry-item group relative cursor-pointer overflow-hidden"
                  style={{ borderRadius: '3px' }}
                  onClick={() => openLightbox(globalIdx)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                    <span className="text-[10px] text-[#bfa15a] uppercase tracking-widest font-semibold leading-tight max-w-[70%]">
                      {image.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[rgba(191,161,90,0.15)] border border-[rgba(191,161,90,0.5)] flex items-center justify-center flex-shrink-0">
                      <ZoomIn size={13} className="text-[#bfa15a]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(191,161,90,0.35)] transition-all duration-300 pointer-events-none" style={{ borderRadius: '3px' }} />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-24 text-[#4a4a4a]">
            <p className="text-base tracking-widest uppercase">Sin imágenes en esta categoría</p>
          </div>
        )}

        {/* Ver más + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 sm:mt-20 flex flex-col items-center gap-7"
        >
          {hasMore && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300"
              style={{
                border: '1px solid rgba(191,161,90,0.35)',
                color: '#bfa15a',
                background: 'transparent',
                borderRadius: '2px',
              }}
            >
              <ChevronDown size={16} />
              Ver los {filteredImages.length - INITIAL_VISIBLE} trabajos restantes
            </button>
          )}
          <div>
            <p style={{ fontSize: '1.0625rem', color: '#5a5a5a', marginBottom: '1.25rem' }}>
              ¿Te gustó lo que ves? Hablemos de tu próximo tatuaje.
            </p>
            <a
              href={content.studio.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm font-bold uppercase tracking-widest"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
