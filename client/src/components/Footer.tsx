/*
 * Footer - Abraham Tattoo CR
 * Design: Clean dark footer, logo + name centered, schedule, address, social icons
 * Inspired by Jason OS Tattoo footer — minimal, spacious, premium
 */

import { MapPin, Clock, Instagram, Facebook, Mail } from 'lucide-react';
import content from '../content.json';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const openDays = content.schedule.days.filter(d => d.open);
  const closedDays = content.schedule.days.filter(d => !d.open);

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(191,161,90,0.12)' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-20 text-center">

        {/* Logo + Name */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={content.hero.logoUrl}
            alt={content.hero.logoAlt}
            className="h-16 w-auto object-contain mb-4"
            style={{ filter: 'drop-shadow(0 0 12px rgba(191,161,90,0.25))' }}
          />
          <h3
            className="text-xl font-bold tracking-widest uppercase mb-1"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span style={{ color: '#f0ede8' }}>ABRAHAM </span>
            <span style={{ color: '#bfa15a' }}>TATTOO CR</span>
          </h3>
          <p className="text-xs text-[#5a5a5a] tracking-[0.2em] uppercase">
            {content.studio.tagline}
          </p>
        </div>

        {/* Bio */}
        <p className="text-sm text-[#5a5a5a] leading-relaxed mb-10 max-w-sm mx-auto">
          Arte permanente de calidad premium en Naranjo, Alajuela, Costa Rica.
        </p>

        {/* Divider */}
        <div className="w-12 h-px mx-auto mb-10" style={{ background: 'rgba(191,161,90,0.3)' }} />

        {/* Location & Schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 text-left max-w-lg mx-auto">
          {/* Schedule */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={13} style={{ color: '#bfa15a' }} />
              <span className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: '#bfa15a' }}>Horario</span>
            </div>
            <div className="space-y-2">
              {openDays.map(d => (
                <div key={d.day} className="flex justify-between text-xs">
                  <span style={{ color: '#7a7a7a' }}>{d.day}</span>
                  <span style={{ color: '#bfa15a' }}>{d.hours}</span>
                </div>
              ))}
              <div className="flex justify-between text-xs pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: '#3a3a3a' }}>{closedDays.map(d => d.day).join(', ')}</span>
                <span style={{ color: '#3a3a3a' }}>Cerrado</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={13} style={{ color: '#bfa15a' }} />
              <span className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: '#bfa15a' }}>Ubicación</span>
            </div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: '#7a7a7a' }}>
              {content.studio.address}
            </p>
            <a
              href={content.studio.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors"
              style={{ color: '#bfa15a' }}
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { href: content.studio.whatsappLink, icon: <WhatsAppIcon />, label: 'WhatsApp' },
            { href: content.studio.instagram, icon: <Instagram size={15} />, label: 'Instagram' },
            { href: content.studio.facebook, icon: <Facebook size={15} />, label: 'Facebook' },
            { href: `mailto:${content.studio.email}`, icon: <Mail size={15} />, label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid rgba(191,161,90,0.25)',
                background: 'rgba(191,161,90,0.05)',
                color: '#bfa15a',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(191,161,90,0.15)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(191,161,90,0.05)'; }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <p className="text-xs" style={{ color: '#3a3a3a' }}>
            {content.footer.copyright}
          </p>

          {/* Digital Atlas */}
          <a
            href={content.footer.poweredByUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] transition-colors" style={{ color: '#3a3a3a' }}>
              Powered by
            </span>
            <img
              src={content.footer.poweredByLogoUrl}
              alt="Digital Atlas"
              className="h-5 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(0.4)', transition: 'filter 0.2s ease' }}
              onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = 'brightness(0) invert(0.7)'; }}
              onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = 'brightness(0) invert(0.4)'; }}
            />
            <span className="text-xs font-semibold transition-colors" style={{ color: '#3a3a3a' }}>Digital Atlas</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
