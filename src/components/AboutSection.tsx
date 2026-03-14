import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Quality Education",
    desc: "Founded in 2008, dedicated to providing quality education and holistic development.",
    bg: "bg-school-sage",
    emoji: "🎯",
  },
  {
    title: "Strong Values",
    desc: "Nurturing young minds with knowledge, discipline, and strong moral values.",
    bg: "bg-school-peach",
    emoji: "💡",
  },
  {
    title: "Individual Growth",
    desc: "Experienced teachers and modern classrooms focused on every student's growth.",
    bg: "bg-school-yellow/30",
    emoji: "🌱",
  },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Smart and clever kids
            <br />
            ready to <span className="text-secondary italic">fly high</span>!
          </h2>
        </div>
        <div className="flex items-start justify-between gap-4">
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Learn smartly with us. We provide education from Nursery to Class 12, combining academic excellence with
            strong moral values and modern learning methods.
          </p>
          <a
            href="#academics"
            className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-secondary transition-colors whitespace-nowrap"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className={`${c.bg} rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all`}>
            <span className="text-4xl mb-4 block">{c.emoji}</span>
            <h3 className="font-heading text-2xl text-foreground mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
