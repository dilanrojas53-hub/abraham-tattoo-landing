/*
 * StatsSection - Abraham Tattoo CR
 * Design: Dark Luxury / Neo-Gothic Premium
 * Rediseño: layout horizontal en desktop, texto más grande, más espacio, menos saturación
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Sparkles, Award } from 'lucide-react';
import content from '../content.json';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={22} style={{ color: '#bfa15a' }} />,
  sparkles: <Sparkles size={22} style={{ color: '#bfa15a' }} />,
  award: <Award size={22} style={{ color: '#bfa15a' }} />,
};

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 sm:py-28" style={{ background: '#0f1113' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Counter — big and prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-end gap-6 mb-3">
            <p
              className="font-black leading-none"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(5rem, 20vw, 9rem)',
                color: '#bfa15a',
                lineHeight: 1,
              }}
            >
              +<AnimatedCounter target={500} />
            </p>
          </div>
          <p className="text-lg sm:text-xl text-[#8a8a8a] uppercase tracking-[0.25em] font-medium">
            {content.stats.tattoosLabel}
          </p>
          <div className="w-16 h-0.5 mt-6" style={{ background: '#bfa15a' }} />
        </motion.div>

        {/* Guarantees — horizontal row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {content.stats.guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="flex flex-col gap-4 p-7 sm:p-8"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(191,161,90,0.12)',
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(191,161,90,0.1)', border: '1px solid rgba(191,161,90,0.25)' }}
              >
                {iconMap[item.icon]}
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
                >
                  {item.title}
                </h3>
                <p className="text-base text-[#7a7a7a] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
