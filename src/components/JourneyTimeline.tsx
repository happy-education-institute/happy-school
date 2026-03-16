import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface Milestone {
  keyIndex: "m1" | "m2" | "m3" | "m4";
}

const milestones: Milestone[] = [
  { keyIndex: "m1" },
  { keyIndex: "m2" },
  { keyIndex: "m3" },
  { keyIndex: "m4" },
];

const MilestoneCard = ({ milestone, index }: { milestone: Milestone; index: number }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      key={milestone.keyIndex}
      ref={ref}
      className={`relative flex items-center mb-12 md:mb-16 ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
    >
      {/* Card Content */}
      <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <motion.div
          whileHover={{
            y: -6,
            scale: 1.02,
            boxShadow: "0 16px 32px hsl(var(--primary) / 0.15)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="p-6 md:p-8 bg-card shadow-md rounded-[2rem] border border-border transition-all duration-300 hover:border-primary/40"
        >
          <motion.div
            className="text-2xl font-bold text-primary mb-2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
          >
            {t('journey', milestone.keyIndex + 'Y')}
          </motion.div>
          <motion.h3
            className="font-heading text-xl text-foreground mb-3 leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.28 }}
          >
            {t('journey', milestone.keyIndex + 'T')}
          </motion.h3>
          <motion.p
            className="text-muted-foreground leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.34 }}
          >
            {t('journey', milestone.keyIndex + 'D')}
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline Dot - Hidden on mobile */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-background shadow-lg hidden md:block"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.12 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 20px hsl(var(--secondary) / 0.5)",
        }}
      />

      {/* Animated Pulse - Hidden on mobile */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full opacity-30 hidden md:block"
        initial={{ scale: 1 }}
        animate={isInView ? { scale: [1, 2, 1], opacity: [0.3, 0, 0.3] } : {}}
        transition={{
          duration: 2,
          delay: index * 0.12 + 0.6,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    </motion.div>
  );
};

const JourneyTimeline = () => {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-20 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">{t('journey', 'about')}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
          {t('journey', 'title1')} <span className="text-secondary italic">{t('journey', 'title2')}</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto font-medium">
          {t('journey', 'desc')}
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line Background - Hidden on mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-border/50 h-full hidden md:block rounded-full" />
        
        {/* Animated Vertical Line - Hidden on mobile */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-primary origin-top hidden md:block rounded-full"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: false }}
          style={{ height: "100%" }}
        />

        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={milestone.keyIndex}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
