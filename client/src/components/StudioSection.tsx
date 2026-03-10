/*
 * StudioSection - Abraham Tattoo CR
 * Design: Dark Luxury / Neo-Gothic Premium
 * Sección del estudio: fotos + videos del interior
 * Gold labels, lightbox en fotos, video inline con controls
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Play } from 'lucide-react';
import content from '../content.json';

type Photo = { url: string; alt: string; label: string; type?: string };
type Video = { url: string; label: string; poster?: string };

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

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative overflow-hidden rounded-xl gold-border-glow"
      style={{ border: '1px solid rgba(191,161,90,0.15)' }}
    >
      {!playing ? (
        <div className="relative group cursor-pointer" onClick={() => setPlaying(true)}>
          {video.poster && (
            <img
              src={video.poster}
              alt={video.label}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {!video.poster && (
            <div className="w-full h-56 sm:h-64 lg:h-72" style={{ background: '#1a1c1f' }} />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)] group-hover:bg-[rgba(0,0,0,0.3)] transition-all duration-300" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #bfa15a 0%, #8c7235 100%)',
                boxShadow: '0 0 30px rgba(191,161,90,0.4)',
              }}
            >
              <Play size={22} color="#0b0b0b" fill="#0b0b0b" style={{ marginLeft: 3 }} />
            </div>
          </div>
          {/* Label */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-sm font-semibold text-[#f0ede8]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {video.label}
            </span>
          </div>
        </div>
      ) : (
        <video
          src={video.url}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="w-full h-56 sm:h-64 lg:h-72 object-cover bg-black"
        />
      )}
    </motion.div>
  );
}

export default function StudioSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const photos: Photo[] = (content.studio_photos as any).photos || [];
  const videos: Video[] = (content.studio_photos as any).videos || [];

  return (
    <section id="estudio" className="py-24 sm:py-28" style={{ background: '#0f1113' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
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
            <span style={{ color: '#f0ede8' }}>EL </span>
            <span style={{ color: '#bfa15a' }}>ESTUDIO</span>
          </h2>
          <div className="w-14 h-0.5 mt-4 mb-5" style={{ background: '#bfa15a' }} />
          <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6a6a' }}>
            <MapPin size={14} style={{ color: '#bfa15a', flexShrink: 0 }} />
            <span>{content.studio_photos.subtitle}</span>
          </div>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {photos.map((photo, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.1)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm font-semibold text-[#f0ede8]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {photo.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(191,161,90,0.5)] rounded-xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Videos Grid */}
        {videos.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-0.5" style={{ background: 'rgba(191,161,90,0.4)' }} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: 'rgba(191,161,90,0.7)' }}>
                Video del interior
              </span>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {videos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
              ))}
            </div>
          </>
        )}

        {/* Location CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={content.studio.googleMapsLink}
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
