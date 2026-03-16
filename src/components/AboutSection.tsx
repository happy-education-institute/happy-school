import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const cards = [
  {
    key: "quality",
    bg: "bg-school-sage",
    emoji: "🎯",
  },
  {
    key: "values",
    bg: "bg-school-peach",
    emoji: "💡",
  },
  {
    key: "growth",
    bg: "bg-school-yellow/30",
    emoji: "🌱",
  },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
              {t('about', 'title1')}
              <br />
              {t('about', 'title2')} <span className="text-secondary italic">{t('about', 'title3')}</span>
            </h2>
          </div>
          <div className="flex items-start justify-between gap-4">
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              {t('about', 'desc')}
            </p>
            <a
              href="#academics"
              className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-secondary transition-colors whitespace-nowrap"
            >
              {t('about', 'enroll')} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.key} className={`${c.bg} rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all`}>
              <span className="text-4xl mb-4 block">{c.emoji}</span>
              <h3 className="font-heading text-2xl text-foreground mb-3">{t('about', c.key + 'Title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t('about', c.key + 'Desc')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
