import { FlaskConical, TrendingUp, Palette, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const programs = [
  { icon: "🔬", key: "science", subjectsKey: ["phy", "chem", "bio", "math"], bg: "bg-school-peach" },
  { icon: "📊", key: "commerce", subjectsKey: ["acc", "bs", "eco"], bg: "bg-school-sage" },
  { icon: "🎨", key: "arts", subjectsKey: ["hist", "pol", "geo", "hindi"], bg: "bg-school-yellow/30" },
];

const AcademicsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="academics" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground font-semibold mb-2">
            {t('academics', 'subtitle1')} <span className="text-secondary font-bold italic">{t('academics', 'subtitle2')}</span> {t('academics', 'subtitle3')}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            {t('academics', 'title1')} <span className="text-secondary italic">{t('academics', 'title2')}</span> {t('academics', 'title3')}
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
            <div key={p.key} className={`${p.bg} rounded-[2rem] p-8 text-center hover:shadow-lg transition-all`}>
              <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-full flex items-center justify-center text-4xl shadow-sm">
                {p.icon}
              </div>
              <h3 className="font-heading text-xl text-foreground mb-4">{t('academics', p.key)}</h3>
              <ul className="space-y-2">
                {p.subjectsKey.map((sKey) => (
                  <li key={sKey} className="text-sm text-muted-foreground font-medium">
                    {t('academics', 'subjects')?.[sKey]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
