/*
 * ArtistSection - Abraham Tattoo CR
 * Design: Dark premium, artist photo + bio
 * Asymmetric layout desktop, stacked mobile
 */

import { motion } from 'framer-motion';
import content from '../content.json';

export default function ArtistSection() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden" style={{ background: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Artist photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000256610_6a30a5dc.png"
                alt="Abraham Espinoza - Tattoo Artist"
                className="w-full h-[420px] sm:h-[500px] object-cover object-top"
              />
              {/* Gold overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(11,11,11,0.8) 0%, rgba(11,11,11,0.1) 50%, transparent 100%)',
                }}
              />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-xl font-bold text-[#f0ede8] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {content.studio.artist}
                </h3>
                <p className="text-sm text-[#bfa15a] tracking-[0.15em] uppercase">
                  Tattoo Artist
                </p>
              </div>
            </div>
            {/* Decorative gold border */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl pointer-events-none"
              style={{ border: '1px solid rgba(191,161,90,0.2)', zIndex: -1 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#bfa15a] mb-3 font-medium">
              El Artista
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
            >
              Arte que dura
              <br />
              <span className="gold-gradient-text">toda la vida</span>
            </h2>
            <div className="section-divider mb-6" style={{ margin: '0 0 24px 0' }} />

            <div className="space-y-4 text-sm sm:text-base text-[#7a7a7a] leading-relaxed">
              <p>
                Abraham Espinoza es un artista del tatuaje con más de{' '}
                <span className="text-[#c0c0c0]">500 piezas realizadas</span>, especializado en
                Black &amp; Grey realista y Full Color. Cada diseño es una obra única, creada
                especialmente para cada cliente.
              </p>
              <p>
                Ubicado en el corazón de{' '}
                <span className="text-[#c0c0c0]">Naranjo, Alajuela</span>, el estudio combina
                un ambiente premium con los más altos estándares de higiene y seguridad.
              </p>
              <p>
                Desde máscaras japonesas hasta personajes de caricatura, el estilo versátil de
                Abraham le permite dar vida a cualquier concepto con{' '}
                <span className="text-[#bfa15a]">precisión y pasión</span>.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Black & Grey', 'Full Color', 'Japonés', 'Cartoon', 'Realismo', 'Personalizado'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-[rgba(191,161,90,0.3)] text-[#8a8a8a] tracking-wide"
                  style={{ background: 'rgba(191,161,90,0.05)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={content.studio.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar con Abraham
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
