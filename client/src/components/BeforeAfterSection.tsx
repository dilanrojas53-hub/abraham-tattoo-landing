/*
 * BeforeAfterSection - Abraham Tattoo CR
 * Design: Dark Luxury / Neo-Gothic Premium
 * Sección especial de Covers con slider comparativo Antes/Después
 * Drag slider para revelar la transformación
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

interface CoverPair {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  description?: string;
}

// Pares de imágenes antes/después de los covers
const COVER_PAIRS: CoverPair[] = [
  {
    before: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257334_6b2e064c.jpg',
    after: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257335_bb7b37ac.jpg',
    beforeAlt: 'Mandala en mano desvanecido - Antes',
    afterAlt: 'Mandala colorido en mano - Después',
    title: 'Mandala en Mano',
    description: 'Renovación completa con color vibrante',
  },
  {
    before: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257339_0ce59bba.jpg',
    after: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257341_33a0497b.jpg',
    beforeAlt: 'Sistema solar en pierna desvanecido - Antes',
    afterAlt: 'Sistema solar hexagonal en pierna - Después',
    title: 'Sistema Solar',
    description: 'Transformación con diseño hexagonal detallado',
  },
  {
    before: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257343_3ace2b7d.jpg',
    after: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257344_442226ad.jpg',
    beforeAlt: 'Pájaro con rosa en muñeca - Antes',
    afterAlt: 'Rosa roja en muñeca - Después',
    title: 'Rosa en Muñeca',
    description: 'Cover limpio con rosa roja vibrante',
  },
  {
    before: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257345_697ba84b.jpg',
    after: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000257347_0660b234.jpg',
    beforeAlt: 'Corazón pequeño en tobillo - Antes',
    afterAlt: 'Corazón colorido en tobillo - Después',
    title: 'Corazón en Tobillo',
    description: 'De simple a colorido con detalles únicos',
  },
  {
    before: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000258062_e008e464.jpg',
    after: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000258063_e48f07aa.jpg',
    beforeAlt: 'Flor mandala boceto en muñeca - Antes',
    afterAlt: 'Flor mandala full color en muñeca - Después',
    title: 'Flor Mandala en Muñeca',
    description: 'Boceto transformado en color vibrante',
  },
];

function CompareSlider({ pair }: { pair: CoverPair }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSlider(e.clientX);
  }, [updateSlider]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  }, [updateSlider]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updateSlider(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) updateSlider(e.touches[0].clientX);
    };
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, updateSlider]);

  return (
    <div className="flex flex-col gap-3">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl select-none"
        style={{
          aspectRatio: '3/4',
          cursor: isDragging ? 'grabbing' : 'grab',
          border: '1px solid rgba(191,161,90,0.2)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* AFTER image (full width, behind) */}
        <img
          src={pair.after}
          alt={pair.afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* BEFORE image (clipped to left of slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={pair.before}
            alt={pair.beforeAlt}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 pointer-events-none"
          style={{
            left: `${sliderPos}%`,
            background: 'linear-gradient(to bottom, transparent, #bfa15a, transparent)',
            boxShadow: '0 0 12px rgba(191,161,90,0.6)',
          }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center pointer-events-none"
          style={{
            left: `${sliderPos}%`,
            background: '#bfa15a',
            boxShadow: '0 0 20px rgba(191,161,90,0.5), 0 2px 8px rgba(0,0,0,0.8)',
            border: '2px solid rgba(255,255,255,0.3)',
          }}
        >
          <GripVertical size={16} color="#0b0b0b" />
        </div>

        {/* Labels */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest pointer-events-none transition-opacity duration-200"
          style={{
            background: 'rgba(0,0,0,0.75)',
            color: '#8a8a8a',
            border: '1px solid rgba(255,255,255,0.1)',
            opacity: sliderPos > 15 ? 1 : 0,
          }}
        >
          Antes
        </div>
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest pointer-events-none transition-opacity duration-200"
          style={{
            background: 'rgba(0,0,0,0.75)',
            color: '#bfa15a',
            border: '1px solid rgba(191,161,90,0.3)',
            opacity: sliderPos < 85 ? 1 : 0,
          }}
        >
          Después
        </div>

        {/* Hint on first load */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest pointer-events-none"
          style={{ color: 'rgba(191,161,90,0.6)' }}
        >
          ← Desliza →
        </div>
      </div>

      {/* Caption */}
      <div>
        <p
          className="font-semibold text-sm"
          style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
        >
          {pair.title}
        </p>
        {pair.description && (
          <p className="text-xs mt-0.5" style={{ color: '#6a6a6a' }}>
            {pair.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section
      id="covers"
      className="py-24 sm:py-28 relative overflow-hidden"
      style={{ background: '#0f1113' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(191,161,90,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

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
            <span
              className="text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ color: '#bfa15a' }}
            >
              Transformaciones Reales
            </span>
          </div>
          <h2
            className="font-black leading-none tracking-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>ANTES </span>
            <span style={{ color: '#bfa15a' }}>&</span>
            <span style={{ color: '#f0ede8' }}> DESPUÉS</span>
          </h2>
          <div className="w-14 h-0.5 mt-4 mb-5" style={{ background: '#bfa15a' }} />
          <p className="text-[#6a6a6a] max-w-xl" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            ¿Tienes un tatuaje que ya no te gusta o que se ha desvanecido? Desliza para ver las transformaciones reales que hemos realizado.
          </p>
        </motion.div>

        {/* Grid of sliders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {COVER_PAIRS.map((pair, index) => (
            <motion.div
              key={pair.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CompareSlider pair={pair} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div
            className="flex-1 p-5 rounded-xl"
            style={{
              background: 'rgba(191,161,90,0.05)',
              border: '1px solid rgba(191,161,90,0.15)',
            }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: '#f0ede8' }}>
              ¿Tienes un tatuaje que quieres transformar?
            </p>
            <p className="text-xs" style={{ color: '#6a6a6a', lineHeight: 1.6 }}>
              Envíame una foto de tu tatuaje actual y te digo qué opciones tenemos. Cada cover es un diseño único pensado para cubrir y superar el original.
            </p>
          </div>
          <a
            href="https://wa.me/message/OHS5TDMALN3WE1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex-shrink-0 inline-flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest whitespace-nowrap"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar Cover
          </a>
        </motion.div>
      </div>
    </section>
  );
}
