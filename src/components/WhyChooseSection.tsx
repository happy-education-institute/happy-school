import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, BookOpen, Sparkles, Trophy, Star } from "lucide-react";

const reasons = [
  {
    title: "Experienced & qualified faculty",
    desc: "Subject experts who mentor with patience, curiosity, and clarity.",
    icon: ShieldCheck,
  },
  {
    title: "Discipline with heart",
    desc: "Values-first culture that builds respect, resilience, and confidence.",
    icon: HeartHandshake,
  },
  {
    title: "Modern, active classrooms",
    desc: "Smart boards, peer learning, and projects that make concepts stick.",
    icon: BookOpen,
  },
  {
    title: "Measured progress",
    desc: "Regular assessments with personal feedback and action plans for growth.",
    icon: Sparkles,
  },
  {
    title: "Safe, caring campus",
    desc: "Secure premises, vigilant staff, and a supportive environment for every child.",
    icon: ShieldCheck,
  },
  {
    title: "Whole-child development",
    desc: "Sports, arts, debates, and clubs that nurture confidence beyond academics.",
    icon: Star,
  },
];

const achievements = [
  {
    title: "Consistently strong board results",
    detail: "Toppers in district merit lists year after year.",
  },
  {
    title: "Olympiad & competition wins",
    detail: "Students shine in science fairs, quizzes, and cultural events.",
  },
  {
    title: "Growth mindset culture",
    detail: "Teachers iterate lessons from weekly reviews and classroom observations.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

const WhyChooseSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-white via-school-sage/30 to-school-peach/30 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,211,140,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(120,180,155,0.25),transparent_30%)]" />
    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide">Why families choose us</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            A school where discipline meets discovery.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            We blend strong academics with character building, joyful classrooms, and safe spaces so every learner grows with confidence.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white/70 backdrop-blur rounded-2xl px-4 py-3 shadow-sm border border-white/60">
          <Sparkles className="w-5 h-5 text-secondary" />
          <span className="text-sm font-semibold text-foreground">Trusted by parents since 2008</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl bg-white/90 backdrop-blur p-5 border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              custom={idx}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="absolute inset-0 opacity-15 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="relative flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6" />
            <div>
              <p className="text-xs uppercase tracking-wide text-primary-foreground/70">Our achievements</p>
              <h3 className="font-heading text-2xl">Results that stay strong</h3>
            </div>
          </div>
          <div className="space-y-4 relative">
            <div className="absolute left-3 top-1 bottom-1 w-[2px] bg-primary-foreground/30" />
            {achievements.map((item, idx) => (
              <div key={item.title} className="pl-8 relative">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white shadow-sm" />
                <h4 className="font-semibold text-lg leading-tight">{item.title}</h4>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
