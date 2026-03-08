/*
 * StatsSection - Abraham Tattoo CR
 * Design: Big left-aligned bicolor title, spacious dark cards
 * Inspired by Jason OS Tattoo — breathing, premium, bold
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Shield, Sparkles, Award } from 'lucide-react';
import content from '../content.json';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={24} style={{ color: '#bfa15a' }} />,
  sparkles: <Sparkles size={24} style={{ color: '#bfa15a' }} />,
  award: <Award size={24} style={{ color: '#bfa15a' }} />,
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 sm:py-32" style={{ background: '#0f1113' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10" ref={ref}>

        {/* Section title — big, left-aligned, bicolor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <h2
            className="font-black leading-none tracking-tight"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.2rem, 8vw, 4rem)',
            }}
          >
            <span style={{ color: '#f0ede8' }}>GARANTÍA &amp; </span>
            <span style={{ color: '#bfa15a' }}>CALIDAD</span>
          </h2>
          {/* Gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-16 h-0.5 mt-4 mb-12 origin-left"
            style={{ background: '#bfa15a' }}
          />
        </motion.div>

        {/* Counter — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-14"
        >
          <p
            className="font-black leading-none"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(4rem, 18vw, 8rem)',
              color: '#bfa15a',
              lineHeight: 1,
            }}
          >
            +<AnimatedCounter target={500} />
          </p>
          <p className="text-base sm:text-lg text-[#8a8a8a] uppercase tracking-[0.25em] font-medium mt-2">
            {content.stats.tattoosLabel}
          </p>
        </motion.div>

        {/* Guarantees — full-width cards stacked on mobile, row on desktop */}
        <div className="flex flex-col gap-6">
          {content.stats.guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="flex items-start gap-5 p-7 sm:p-8"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(191,161,90,0.15)',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(191,161,90,0.12)', border: '1px solid rgba(191,161,90,0.3)' }}
              >
                {iconMap[item.icon]}
              </div>
              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#7a7a7a] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
