import { Monitor, Laptop, BookOpen, Bus, Building2, Wifi } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const facilities = [
  { icon: Monitor, key: "smart", emoji: "📺" },
  { icon: Laptop, key: "comp", emoji: "💻" },
  { icon: BookOpen, key: "lib", emoji: "📖" },
  { icon: Bus, key: "bus", emoji: "🚌" },
  { icon: Building2, key: "hostel", emoji: "🏠" },
  { icon: Wifi, key: "digital", emoji: "🌐" },
];

const FacilitiesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="facilities" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground font-semibold mb-2">{t('facilities', 'subtitle')}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            {t('facilities', 'title1')} <span className="text-secondary italic">{t('facilities', 'title2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {facilities.map((f) => (
            <div
              key={f.key}
              className="bg-background rounded-[1.5rem] p-6 hover:shadow-lg transition-all group hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-school-peach flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform">
                {f.emoji}
              </div>
              <h3 className="font-heading text-lg text-foreground mb-1">{t('facilities', f.key)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t('facilities', f.key + 'Desc')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
