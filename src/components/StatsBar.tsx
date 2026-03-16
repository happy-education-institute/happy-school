import { Calendar, Users, UserCheck, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const stats = [
  { icon: Calendar, key: "serving", value: "2008", bg: "bg-secondary" },
  { icon: Users, key: "students", value: "3000+", bg: "bg-school-green" },
  { icon: UserCheck, key: "faculty", value: "30+", bg: "bg-school-olive" },
  { icon: BookOpen, key: "classes", value: "Nursery–12th", bg: "bg-primary" },
];

const StatsBar = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="bg-foreground rounded-[2rem] p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.key} className="flex items-center gap-3">
                <div className={`w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-heading text-xl md:text-2xl text-primary-foreground">{s.value}</div>
                  <div className="text-xs text-primary-foreground/60 font-semibold">{t('stats', s.key)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
