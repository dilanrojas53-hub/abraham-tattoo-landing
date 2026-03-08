/*
 * PoliciesSection - Abraham Tattoo CR
 * Design: Big left-aligned bicolor title, clean policy card
 * Inspired by Jason OS Tattoo policies section — clear, spacious
 */

import { motion } from 'framer-motion';
import { Calendar, RefreshCw, XCircle, PenTool } from 'lucide-react';
import content from '../content.json';

const POLICIES = [
  {
    icon: <Calendar size={20} style={{ color: '#bfa15a' }} />,
    label: 'Reserva:',
    text: 'Para apartar tu cita se requiere un adelanto de ₡30.000 (deducibles del total). Métodos: SINPE Móvil, depósito bancario o efectivo.',
  },
  {
    icon: <PenTool size={20} style={{ color: '#bfa15a' }} />,
    label: 'Diseño:',
    text: 'El diseño personalizado se entrega 1 día antes de la sesión para que puedas revisarlo con calma.',
  },
  {
    icon: <RefreshCw size={20} style={{ color: '#bfa15a' }} />,
    label: 'Reprogramación:',
    text: 'El adelanto no es reembolsable, pero sí es reprogramable con aviso previo. Tienes una oportunidad de cambiar la fecha sin perder el adelanto.',
  },
  {
    icon: <XCircle size={20} style={{ color: '#bfa15a' }} />,
    label: 'Inasistencia:',
    text: 'En caso de no asistir sin previo aviso, se pierde el espacio y el adelanto. Por respeto al tiempo del artista y otros clientes.',
  },
];

export default function PoliciesSection() {
  return (
    <section id="info" className="py-24 sm:py-32" style={{ background: '#0f1113' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-10">

        {/* Big bicolor title — left aligned */}
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
            <span style={{ color: '#f0ede8' }}>POLÍTICAS </span>
            <span style={{ color: '#bfa15a' }}>DE CITAS</span>
          </h2>
          <div className="w-14 h-0.5 mt-4 mb-6" style={{ background: '#bfa15a' }} />
          <p className="text-[#6a6a6a]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            {content.policies.subtitle}
          </p>
        </motion.div>

        {/* Policies card — clean, spacious */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 sm:p-10"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(191,161,90,0.2)',
          }}
        >
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {POLICIES.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5 py-7 first:pt-0 last:pb-0"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(191,161,90,0.1)', border: '1px solid rgba(191,161,90,0.25)' }}
                >
                  {p.icon}
                </div>
                <div>
                  <span
                    className="text-base font-bold block mb-1"
                    style={{ color: '#bfa15a', fontFamily: 'Playfair Display, serif' }}
                  >
                    {p.label}
                  </span>
                  <p className="text-[#7a7a7a]" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href={content.studio.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-3 w-full py-5 text-sm font-bold uppercase tracking-widest"
            style={{ minHeight: '60px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
