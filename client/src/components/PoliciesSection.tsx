/*
 * PoliciesSection - Abraham Tattoo CR
 * Design: Dark cards with gold accents, accordion style
 * Clear financial info, reservation process
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CreditCard, Info, PenTool, Heart, ChevronDown } from 'lucide-react';
import content from '../content.json';

const iconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar size={18} />,
  'credit-card': <CreditCard size={18} />,
  info: <Info size={18} />,
  'pen-tool': <PenTool size={18} />,
  heart: <Heart size={18} />,
};

export default function PoliciesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="info" className="py-16 sm:py-20" style={{ background: '#0b0b0b' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#bfa15a] mb-3 font-medium">
            Transparencia Total
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
          >
            {content.policies.title}
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-sm sm:text-base text-[#6a6a6a]">
            {content.policies.subtitle}
          </p>
        </motion.div>

        {/* Highlight card: Reservation amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 p-5 sm:p-6 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(191,161,90,0.12) 0%, rgba(191,161,90,0.05) 100%)',
            border: '1px solid rgba(191,161,90,0.35)',
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-[#bfa15a]"
              style={{ background: 'rgba(191,161,90,0.15)', border: '1px solid rgba(191,161,90,0.3)' }}
            >
              <Calendar size={20} />
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
              >
                Reserva tu Cita
              </h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">
                Aparta tu espacio con solo{' '}
                <span className="text-[#bfa15a] font-semibold text-base">₡30.000</span>
                {' '}(deducibles del total). Aceptamos{' '}
                <span className="text-[#d4b96a]">SINPE Móvil</span>,{' '}
                <span className="text-[#d4b96a]">depósito bancario</span> y{' '}
                <span className="text-[#d4b96a]">efectivo</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {content.policies.items.slice(1).map((item, index) => {
            const realIndex = index + 1;
            const isOpen = openIndex === realIndex;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: isOpen ? 'rgba(191,161,90,0.05)' : 'rgba(255,255,255,0.02)',
                  border: isOpen ? '1px solid rgba(191,161,90,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => toggle(realIndex)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#bfa15a] flex-shrink-0"
                      style={{ background: 'rgba(191,161,90,0.1)' }}
                    >
                      {iconMap[item.icon]}
                    </div>
                    <span
                      className="text-sm sm:text-base font-semibold"
                      style={{ color: isOpen ? '#bfa15a' : '#d0cdc8' }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#bfa15a] flex-shrink-0 ml-2"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 pl-[60px]">
                        <p className="text-sm text-[#7a7a7a] leading-relaxed">{item.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-[#5a5a5a] mb-4">¿Tienes preguntas sobre el proceso?</p>
          <a
            href={content.studio.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
