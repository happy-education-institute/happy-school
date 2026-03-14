import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2008",
    title: "Humble start up to Class 8",
    description:
      "Opened our doors with a single block and a promise: joyful learning, close teacher attention, and strong values for every child.",
  },
  {
    year: "2014-2015",
    title: "Upgraded to secondary (Class 10)",
    description:
      "Expanded labs and library hours, introduced foundational coding and science clubs, and celebrated our first district-level merit holders.",
  },
  {
    year: "2020",
    title: "Digital leap and maker culture",
    description:
      "Added smart classrooms, robotics kits, and STEM fairs that encouraged students to prototype, present, and publish their ideas with confidence.",
  },
  {
    year: "2025-2026",
    title: "Senior secondary (Class 12) with career focus",
    description:
      "Launched dedicated streams with mentorship, Olympiad prep, career guidance, and university counseling to help every learner choose their next path.",
  },
];

const MilestoneCard = ({ milestone, index }: { milestone: Milestone; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      key={milestone.year}
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
            boxShadow: "0 16px 32px rgba(30, 115, 190, 0.15)",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="p-6 md:p-8 bg-white shadow-[0_6px_16px_rgba(13,34,64,0.08)] rounded-2xl border border-[#E6EEF6] transition-all duration-300 hover:border-[#1E73BE]/40"
        >
          <motion.div
            className="text-2xl font-bold text-[#1E73BE] mb-2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
          >
            {milestone.year}
          </motion.div>
          <motion.h3
            className="text-xl font-semibold text-gray-900 mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.28 }}
          >
            {milestone.title}
          </motion.h3>
          <motion.p
            className="text-slate-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.34 }}
          >
            {milestone.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline Dot - Hidden on mobile */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1E73BE] rounded-full border-4 border-white shadow-lg hidden md:block"
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
          boxShadow: "0 0 20px rgba(30, 115, 190, 0.5)",
        }}
      />

      {/* Animated Pulse - Hidden on mobile */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1E73BE] rounded-full opacity-30 hidden md:block"
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

const JourneyTimeline = () => (
  <section id="journey" className="py-20 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#1E73BE]">Journey</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A timeline of care, curiosity, and bold upgrades that keep our
          students future-ready.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line - Hidden on mobile */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-[#1E73BE] origin-top hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: false }}
          style={{ height: "100%" }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-[#EEF6FF] h-full hidden md:block" />

        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={milestone.year}
            milestone={milestone}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default JourneyTimeline;
