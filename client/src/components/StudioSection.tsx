/*
 * StudioSection - Abraham Tattoo CR
 * Design: Dark section, 2-3 studio photos side by side desktop / stacked mobile
 * Gold labels, lightbox on click
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import content from '../content.json';

function StudioLightbox({ photo, onClose }: { photo: typeof content.studio_photos.photos[0]; onClose: () => void }) {
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
  const [selectedPhoto, setSelectedPhoto] = useState<typeof content.studio_photos.photos[0] | null>(null);

  return (
    <section id="estudio" className="py-16 sm:py-20" style={{ background: '#0f1113' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#bfa15a] mb-3 font-medium">
            Nuestro Espacio
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
          >
            {content.studio_photos.title}
          </h2>
          <div className="section-divider mb-4" />
          <div className="flex items-center justify-center gap-2 text-sm text-[#6a6a6a]">
            <MapPin size={14} className="text-[#bfa15a]" />
            <span>{content.studio_photos.subtitle}</span>
          </div>
          <p className="text-sm text-[#5a5a5a] mt-2 max-w-md mx-auto">
            {content.studio_photos.description}
          </p>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {content.studio_photos.photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl gold-border-glow"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.1)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className="text-sm font-semibold text-[#f0ede8]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {photo.label}
                </span>
              </div>
              {/* Gold border on hover */}
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
          className="text-center mt-10"
        >
          <a
            href="https://maps.app.goo.gl/NaranjoCoproo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(191,161,90,0.4)] text-[#bfa15a] text-sm font-medium hover:bg-[rgba(191,161,90,0.08)] transition-all duration-200 tracking-wide"
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
