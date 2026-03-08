/*
 * ContactSection - Abraham Tattoo CR
 * Design: Big bicolor title, spacious layout, map + contact info
 * Inspired by Jason OS Tattoo footer/contact — clean, premium
 */

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import content from '../content.json';

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 sm:py-32" style={{ background: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

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
            <span style={{ color: '#f0ede8' }}>UBICACIÓN </span>
            <span style={{ color: '#bfa15a' }}>&amp; CONTACTO</span>
          </h2>
          <div className="w-14 h-0.5 mt-4 mb-6" style={{ background: '#bfa15a' }} />
          <p className="text-[#6a6a6a]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
            Estamos listos para hacer realidad tu próximo tatuaje.
          </p>
        </motion.div>

        {/* Main WhatsApp CTA — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <a
            href={content.studio.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-3 w-full py-5 text-base font-bold uppercase tracking-widest shadow-xl"
            style={{ minHeight: '64px' }}
          >
            <WhatsAppIcon size={22} />
            COTIZAR POR WHATSAPP
          </a>
        </motion.div>

        {/* Two-column layout: info + map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: info */}
          <div className="flex flex-col gap-6">
            {/* Secondary contact buttons */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { href: `mailto:${content.studio.email}`, icon: <Mail size={20} />, label: 'Email' },
                { href: content.studio.instagram, icon: <Instagram size={20} />, label: 'Instagram' },
                { href: content.studio.facebook, icon: <Facebook size={20} />, label: 'Facebook' },
              ].map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-2 py-6 px-3 transition-all duration-200"
                  style={{
                    border: '1px solid rgba(191,161,90,0.25)',
                    background: 'rgba(255,255,255,0.02)',
                    color: '#bfa15a',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(191,161,90,0.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  {btn.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{btn.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(191,161,90,0.15)',
              }}
            >
              <div className="flex items-center gap-3 px-7 py-5" style={{ borderBottom: '1px solid rgba(191,161,90,0.12)' }}>
                <Clock size={16} style={{ color: '#bfa15a' }} />
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
                >
                  {content.schedule.title}
                </h3>
              </div>
              <div className="px-7 py-4">
                {content.schedule.days.map((day) => (
                  <div
                    key={day.day}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                  >
                    <span className="text-sm" style={{ color: day.open ? '#c0c0c0' : '#4a4a4a' }}>{day.day}</span>
                    <span className="text-sm font-semibold" style={{ color: day.open ? '#bfa15a' : '#4a4a4a' }}>{day.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-start gap-4 p-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <MapPin size={18} style={{ color: '#bfa15a', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="text-sm text-[#c0c0c0] leading-relaxed">{content.studio.address}</p>
                <a
                  href={content.studio.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium mt-2 inline-block transition-colors"
                  style={{ color: '#bfa15a' }}
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden"
            style={{
              border: '1px solid rgba(191,161,90,0.2)',
              minHeight: '400px',
            }}
          >
            <iframe
              src={content.studio.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', display: 'block', filter: 'grayscale(20%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Silent Noir Ink - Abraham Tattoo CR"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
