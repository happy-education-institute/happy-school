import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const programs = [
  {
    icon: "🔬",
    key: "science",
    subjectsKey: ["phy", "chem", "bio", "math"],
    bg: "bg-school-peach",
    accent: "border-orange-300",
    badge: "bg-orange-100 text-orange-700",
    iconBg: "bg-orange-50",
  },
  {
    icon: "🌾",
    key: "agriculture",
    subjectsKey: ["agbio", "agchem"],
    bg: "bg-school-sage",
    accent: "border-green-300",
    badge: "bg-green-100 text-green-700",
    iconBg: "bg-green-50",
  },
  {
    icon: "🎨",
    key: "arts",
    subjectsKey: ["hindi", "eng", "hist", "geo", "pol", "sans", "eco"],
    bg: "bg-school-yellow/30",
    accent: "border-yellow-300",
    badge: "bg-yellow-100 text-yellow-700",
    iconBg: "bg-yellow-50",
  },
  {
    icon: "📊",
    key: "commerce",
    subjectsKey: ["acc", "bs", "cecon"],
    bg: "bg-blue-50",
    accent: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-50",
  },
];

const AcademicsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="academics" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground font-semibold mb-2">
            {t('academics', 'subtitle1')}{" "}
            <span className="text-secondary font-bold italic">
              {t('academics', 'subtitle2')}
            </span>{" "}
            {t('academics', 'subtitle3')}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            {t('academics', 'title1')}{" "}
            <span className="text-secondary italic">{t('academics', 'title2')}</span>{" "}
            {t('academics', 'title3')}
          </h2>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="h-px w-20 bg-border" />
          <Sparkles className="w-5 h-5 text-school-yellow" />
          <div className="h-px w-20 bg-border" />
        </div>

        {/* Stream Cards — 2×2 grid on md+ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programs.map((p) => {
            const subjects = t('academics', 'subjects') as Record<string, string> | undefined;
            return (
              <div
                key={p.key}
                className={`${p.bg} border ${p.accent} rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-5 ${p.iconBg} rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {p.icon}
                </div>

                {/* Stream name */}
                <h3 className="font-heading text-xl text-foreground mb-4">
                  {t('academics', p.key)}
                </h3>

                {/* Subjects as pills */}
                <div className="flex flex-wrap gap-2">
                  {p.subjectsKey.map((sKey) => (
                    <span
                      key={sKey}
                      className={`${p.badge} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {subjects?.[sKey]}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
