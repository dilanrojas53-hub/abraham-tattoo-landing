/*
 * StatsSection - Abraham Tattoo CR
 * Design: Dark card with gold accents, animated counter
 * Social proof + 3 guarantee bullets with gold icons
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Shield, Sparkles, Award } from 'lucide-react';
import content from '../content.json';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={22} className="text-gold" style={{ color: '#bfa15a' }} />,
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
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 sm:py-28" style={{ background: '#0f1113' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Counter */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="text-center mb-14 sm:mb-16"
        >
          <div
            className="inline-flex flex-col items-center gap-2 px-10 py-8 rounded-2xl gold-border-glow"
            style={{ background: 'rgba(191,161,90,0.04)' }}
          >
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold gold-gradient-text" style={{ fontFamily: 'Playfair Display, serif' }}>
              +<AnimatedCounter target={500} />
            </p>
            <p className="text-sm sm:text-base text-[#8a8a8a] uppercase tracking-[0.2em] font-medium">
              {content.stats.tattoosLabel}
            </p>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          {content.stats.guarantees.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-xl gold-border-glow transition-all duration-300 hover:bg-[rgba(191,161,90,0.04)]"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'rgba(191,161,90,0.1)', border: '1px solid rgba(191,161,90,0.25)' }}
              >
                {iconMap[item.icon]}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: 'Playfair Display, serif', color: '#f0ede8' }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#7a7a7a] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
