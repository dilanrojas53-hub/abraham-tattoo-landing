/*
 * ArtistSection - Abraham Tattoo CR
 * Design: Big bicolor title, spacious layout, numbered steps for booking
 * Premium dark, breathing, mobile-first
 */

import { motion } from 'framer-motion';
import content from '../content.json';

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const STEPS = [
  { num: '01', title: 'Idea o Referencia', desc: 'Envíame tus imágenes de referencia y describe tu idea por WhatsApp.' },
  { num: '02', title: 'Tamaño y Zona', desc: 'Indica en qué parte del cuerpo lo quieres y el tamaño aproximado en cm.' },
  { num: '03', title: 'Cotización y Diseño', desc: 'Recibe tu cotización personalizada. El diseño se entrega 1 día antes de la cita.' },
];

export default function ArtistSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden" style={{ background: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Top: Artist bio — asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 sm:mb-32">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000256610_6a30a5dc.png"
                alt="Abraham Espinoza - Tattoo Artist"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(11,11,11,0.9) 0%, rgba(11,11,11,0.1) 60%, transparent 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="text-2xl font-bold text-[#f0ede8] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {content.studio.artist}
                </h3>
                <p className="text-sm text-[#bfa15a] tracking-[0.2em] uppercase font-medium">Tattoo Artist</p>
              </div>
            </div>
            {/* Offset gold border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{ border: '1px solid rgba(191,161,90,0.2)', zIndex: -1 }}
            />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h2
              className="font-black leading-none tracking-tight mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.2rem, 8vw, 3.8rem)',
              }}
            >
              <span style={{ color: '#f0ede8' }}>ARTE QUE DURA </span>
              <span style={{ color: '#bfa15a' }}>TODA LA VIDA</span>
            </h2>
            <div className="w-14 h-0.5 mb-8" style={{ background: '#bfa15a' }} />

            <div className="space-y-5 text-[#7a7a7a] leading-relaxed" style={{ fontSize: '1rem' }}>
              <p>
                Abraham Espinoza es un artista del tatuaje con más de{' '}
                <span style={{ color: '#c0c0c0' }}>500 piezas realizadas</span>, especializado en
                Black &amp; Grey realista y Full Color vibrante.
              </p>
              <p>
                Ubicado en el corazón de{' '}
                <span style={{ color: '#c0c0c0' }}>Naranjo, Alajuela</span>, el estudio combina
                un ambiente premium con los más altos estándares de higiene y seguridad hospitalaria.
              </p>
              <p>
                Desde máscaras japonesas hasta personajes de caricatura, el estilo versátil de
                Abraham da vida a cualquier concepto con{' '}
                <span style={{ color: '#bfa15a' }}>precisión y pasión</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-7 mb-8">
              {['Black & Grey', 'Full Color', 'Japonés', 'Cartoon', 'Realismo'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-xs font-medium tracking-wide"
                  style={{
                    border: '1px solid rgba(191,161,90,0.3)',
                    color: '#8a8a8a',
                    background: 'rgba(191,161,90,0.05)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={content.studio.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest"
            >
              <WA_ICON />
              Agendar con Abraham
            </a>
          </motion.div>
        </div>

        {/* Bottom: How to book — numbered steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-black leading-none tracking-tight mb-4"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>AGENDA TU </span>
            <span style={{ color: '#bfa15a' }}>CITA</span>
          </h2>
          <p className="text-[#7a7a7a] mb-10 max-w-xl" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            El proceso para agendar tu tatuaje es simple y directo. Me enfoco en darte una
            atención personalizada para que tu diseño sea único.
          </p>

          <div className="flex flex-col gap-6 mb-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 p-7"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(191,161,90,0.12)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-base"
                  style={{
                    background: 'rgba(191,161,90,0.1)',
                    border: '1px solid rgba(191,161,90,0.35)',
                    color: '#bfa15a',
                    fontFamily: 'Playfair Display, serif',
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#7a7a7a]" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href={content.studio.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-3 w-full sm:w-auto sm:inline-flex py-5 px-10 text-sm font-bold uppercase tracking-widest"
            style={{ minHeight: '60px' }}
          >
            <WA_ICON />
            AGENDAR POR WHATSAPP
          </a>
          <p className="text-[#555] text-xs mt-3 tracking-wide">Respuesta usualmente en menos de 24 horas.</p>
        </motion.div>
      </div>
    </section>
  );
}
