import { Calendar, Users, UserCheck, BookOpen } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Serving Since", value: "2008", bg: "bg-secondary" },
  { icon: Users, label: "Happy Students", value: "3000+", bg: "bg-school-green" },
  { icon: UserCheck, label: "Expert Faculty", value: "30+", bg: "bg-school-olive" },
  { icon: BookOpen, label: "Classes Available", value: "Nursery–12th", bg: "bg-primary" },
];

const StatsBar = () => (
  <section className="py-10">
    <div className="container mx-auto px-4">
      <div className="bg-foreground rounded-[2rem] p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-heading text-xl md:text-2xl text-primary-foreground">{s.value}</div>
                <div className="text-xs text-primary-foreground/60 font-semibold">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;
