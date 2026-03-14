import { FlaskConical, TrendingUp, Palette, Sparkles } from "lucide-react";

const programs = [
  { icon: "🔬", title: "Science Stream", subjects: ["Physics", "Chemistry", "Biology", "Mathematics"], bg: "bg-school-peach" },
  { icon: "📊", title: "Commerce Stream", subjects: ["Accountancy", "Business Studies", "Economics"], bg: "bg-school-sage" },
  { icon: "🎨", title: "Arts Stream", subjects: ["History", "Political Science", "Geography", "Hindi Literature"], bg: "bg-school-yellow/30" },
];

const AcademicsSection = () => (
  <section id="academics" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground font-semibold mb-2">We focus on one <span className="text-secondary font-bold italic">impactful</span> lesson at a time</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">
          Shaping the <span className="text-secondary italic">future</span> of kids
        </h2>
      </div>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-3 my-8">
        <div className="h-px w-20 bg-border" />
        <Sparkles className="w-5 h-5 text-school-yellow" />
        <div className="h-px w-20 bg-border" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className={`${p.bg} rounded-[2rem] p-8 text-center hover:shadow-lg transition-all`}>
            <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-full flex items-center justify-center text-4xl shadow-sm">
              {p.icon}
            </div>
            <h3 className="font-heading text-xl text-foreground mb-4">{p.title}</h3>
            <ul className="space-y-2">
              {p.subjects.map((s) => (
                <li key={s} className="text-sm text-muted-foreground font-medium">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicsSection;
