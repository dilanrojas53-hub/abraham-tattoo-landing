/*
 * StudioSection - Abraham Tattoo CR
 * Design: Dark Luxury / Neo-Gothic Premium
 * Rediseño: solo fotos del estudio (sin videos), más espacio, texto más grande
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import content from '../content.json';

type Photo = { url: string; alt: string; label: string; type?: string };

function StudioLightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] border border-[rgba(191,161,90,0.3)] text-[#bfa15a] hover:bg-[rgba(191,161,90,0.15)] transition-all"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <motion.img
          key={photo.url}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={photo.url}
          alt={photo.alt}
          className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: '0 0 60px rgba(0,0,0,0.8), 0 0 30px rgba(191,161,90,0.1)' }}
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs rounded-full border border-[rgba(191,161,90,0.4)] text-[#bfa15a] bg-[rgba(0,0,0,0.6)] tracking-widest uppercase">
            {photo.label}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function StudioSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const photos: Photo[] = (content.studio_photos as any).photos || [];

  return (
    <section id="estudio" className="py-20 sm:py-28" style={{ background: '#0f1113' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: '#bfa15a' }} />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: '#bfa15a' }}>
              Naranjo, Alajuela
            </span>
          </div>
          <h2
            className="font-black leading-none tracking-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.4rem, 8vw, 4rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>EL </span>
            <span style={{ color: '#bfa15a' }}>ESTUDIO</span>
          </h2>
          <div className="w-14 h-0.5 mt-4 mb-5" style={{ background: '#bfa15a' }} />
          <div className="flex items-center gap-2 text-base" style={{ color: '#6a6a6a' }}>
            <MapPin size={15} style={{ color: '#bfa15a', flexShrink: 0 }} />
            <span>{content.studio_photos.subtitle}</span>
          </div>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              style={{ border: '1px solid rgba(191,161,90,0.12)' }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.1)] to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-base font-semibold text-[#f0ede8]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {photo.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(191,161,90,0.5)] rounded-xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Location CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={content.studio.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[rgba(191,161,90,0.4)] text-[#bfa15a] text-sm font-medium hover:bg-[rgba(191,161,90,0.08)] transition-all duration-200 tracking-wide"
          >
            <MapPin size={16} />
            Ver en Google Maps
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <StudioLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </section>
  );
}
