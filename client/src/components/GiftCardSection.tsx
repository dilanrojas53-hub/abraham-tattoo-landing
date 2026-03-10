/*
 * GiftCardSection - Abraham Tattoo CR
 * Design: Dark Luxury / Neo-Gothic Premium
 * Sección especial de Gift Cards — diseño tipo tarjeta física premium
 * con imagen de la gift card real, CTA a WhatsApp y descripción
 */

import { motion } from 'framer-motion';
import { Gift, Heart, MessageCircle, Star } from 'lucide-react';

const GIFT_CARD_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663241686300/HG9bFNBoVshFCi5o6NRwZp/1000258067_5655e1c1.jpg';
const WHATSAPP_LINK = 'https://wa.me/message/OHS5TDMALN3WE1';

const FEATURES = [
  {
    icon: Gift,
    title: 'El regalo perfecto',
    desc: 'Regala una experiencia única e irrepetible. La gift card cubre el tatuaje de elección del receptor.',
  },
  {
    icon: Heart,
    title: 'Para cualquier ocasión',
    desc: 'Cumpleaños, aniversarios, graduaciones o simplemente para demostrar cuánto aprecias a alguien.',
  },
  {
    icon: Star,
    title: 'Sin fecha de vencimiento',
    desc: 'El receptor puede usarla cuando quiera. Sin presiones, sin límites de tiempo.',
  },
];

export default function GiftCardSection() {
  return (
    <section
      id="gift-card"
      className="py-24 sm:py-28 relative overflow-hidden"
      style={{ background: '#0a0c0e' }}
    >
      {/* Decorative background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(191,161,90,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(191,161,90,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ background: '#bfa15a' }} />
            <span
              className="text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ color: '#bfa15a' }}
            >
              El regalo que deja huella
            </span>
          </div>
          <h2
            className="font-black leading-none tracking-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>TATTOO </span>
            <span style={{ color: '#bfa15a' }}>GIFT CARD</span>
          </h2>
          <div className="w-14 h-0.5 mt-4" style={{ background: '#bfa15a' }} />
        </motion.div>

        {/* Main layout: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Gift Card image with premium frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer glow frame */}
            <div
              className="absolute -inset-3 rounded-2xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(191,161,90,0.15) 0%, transparent 50%, rgba(191,161,90,0.08) 100%)',
                filter: 'blur(12px)',
              }}
            />
            {/* Corner ornaments */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor: '#bfa15a' }} />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: '#bfa15a' }} />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor: '#bfa15a' }} />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: '#bfa15a' }} />

            {/* Gift Card image */}
            <div
              className="relative overflow-hidden rounded-xl"
              style={{
                border: '1px solid rgba(191,161,90,0.25)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(191,161,90,0.08)',
              }}
            >
              <img
                src={GIFT_CARD_IMAGE}
                alt="Tattoo Gift Card Abraham Tattoo CR"
                className="w-full object-cover"
                style={{ maxHeight: '480px', objectPosition: 'center' }}
              />
              {/* Subtle overlay for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 100%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #bfa15a 0%, #8c7235 100%)',
                boxShadow: '0 8px 24px rgba(191,161,90,0.3)',
              }}
            >
              <Gift size={16} color="#0b0b0b" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b0b0b]">
                Gift Card
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Description */}
            <div>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: '#c8c4bc', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
              >
                "Tu regalo es un tatuaje de tu elección, cortesía de nuestro increíble estudio."
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#6a6a6a' }}>
                Regala arte permanente. La persona que recibe la gift card puede elegir el diseño que siempre ha querido y reservar su cita directamente con Abraham. Un regalo que dura toda la vida.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'rgba(191,161,90,0.08)',
                      border: '1px solid rgba(191,161,90,0.2)',
                    }}
                  >
                    <feat.icon size={18} style={{ color: '#bfa15a' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: '#f0ede8' }}>
                      {feat.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: '#6a6a6a' }}>
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: 'rgba(191,161,90,0.12)' }} />

            {/* How it works */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(191,161,90,0.04)',
                border: '1px solid rgba(191,161,90,0.12)',
              }}
            >
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#bfa15a' }}>
                ¿Cómo funciona?
              </p>
              <ol className="space-y-2">
                {[
                  'Contáctanos por WhatsApp para adquirir la gift card',
                  'Realizas el pago y recibís la tarjeta digital o física',
                  'El receptor agenda su cita y elige su diseño',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs" style={{ color: '#8a8a8a' }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: 'rgba(191,161,90,0.15)', color: '#bfa15a' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest"
              style={{ alignSelf: 'flex-start' }}
            >
              <MessageCircle size={18} />
              Adquirir Gift Card
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
